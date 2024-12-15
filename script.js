document.addEventListener("DOMContentLoaded", () => {
    const VChartConstructor = window.VChart?.default || window.VChart;
    if (typeof VChartConstructor !== 'function') {
        console.error("VChart constructor is not available. Check your script tag.");
        return;
    }

    const chartContainer = document.getElementById('chart');
    if (!chartContainer) {
        console.error("Container with id 'chart' not found!");
        return;
    }

    const spec = {
        type: 'bar',
        data: [
            {
                id: 'barData',
                values: [
                    { month: 'Monday', sales: 22 },
                    { month: 'Tuesday', sales: 13 },
                    { month: 'Wednesday', sales: 25 },
                    { month: 'Thursday', sales: 29 },
                    { month: 'Friday', sales: 38 }
                ]
            }
        ],
        xField: 'month',
        yField: 'sales'
    };

    try {
        const chart = new VChartConstructor(spec, { dom: chartContainer });
        chart.renderSync();
    } catch (error) {
        console.error("Error initializing the chart:", error);
    }
});
