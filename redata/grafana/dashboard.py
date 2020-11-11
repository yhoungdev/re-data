from grafanalib.core import (
    Alert, AlertCondition, Dashboard, Graph,
    GreaterThan, OP_AND, OPS_FORMAT, Row, RTYPE_SUM, SECONDS_FORMAT,
    SHORT_FORMAT, single_y_axis, Target, TimeRange, YAxes, YAxis
)
from redata.db_operations import get_current_table_schema
from redata.checks.data_values import TYPE_CHECK_MAP
from redata import settings
from redata.metric_queries import table_delay

def get_delay_panel(table):
    graph = Graph(
        title=f'{table} curr_delay',
        dataSource=settings.REDATA_GRAFANA_SOURCE,
        targets=[
            {
                "format": "time_series",
                "group": [],
                "hide": False,
                "metricColumn": "none",
                "rawQuery": True,
                "rawSql": table_delay.DELAY_QUERY.format(table_name=table),
                "refId": "A",
            },
        ],
        yAxes=single_y_axis(format='none'),
    )
    return graph

def get_single_panel(table, column, check_name, check_sql):
    graph = Graph(
        title=f'{table}:{column} {check_name}',
        dataSource=settings.REDATA_GRAFANA_SOURCE,
        targets=[
            {
                "format": "time_series",
                "group": [],
                "hide": False,
                "metricColumn": "none",
                "rawQuery": True,
                "rawSql": check_sql.format(table, column),
                "refId": "A",
            },
        ],
        yAxes=single_y_axis(format='none'),
    )
    return graph

def get_dashboard_for_table(table_name):
    schema = get_current_table_schema(table_name)
    all_rows = []

    all_rows.append(
        Row(panels=[
            get_delay_panel(table_name)
        ])
    )

    for col_dict in schema:
        col_name = col_dict['name']
        col_type = col_dict['type']

        for check_dict in TYPE_CHECK_MAP.get(col_type, []):

            all_rows.append(
                Row(panels=[
                    get_single_panel(
                        table_name,
                        col_name, 
                        check_dict['name'],
                        check_dict['metrics_query']
                    )
                ])
            )

    dashboard = Dashboard(
        title=f"table:{table_name}",
        rows=all_rows,
    ).auto_panel_ids()

    return dashboard

