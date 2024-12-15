window.addEventListener("DOMContentLoaded", () => {
	// Once loaded

	const spec = {
		type: 'bar',
		data: [
		  {
			id: 'barData',
			values: [
			  { month: 'Monday', sales: 22 },
			  { month: 'Tuesday', sales: 13 },
			  { month: 'Wednesday', sales: 10 },
			  { month: 'Thursday', sales: 29 },
			  { month: 'Friday', sales: 38 },
			  { month: 'Other', sales: 12 },
			  { month: 'Not other', sales: 38 }
			]
		  }
		],
		xField: 'month',
		yField: 'sales'
	};

	const chart = document.getElementById("chart")

	const vchart = new window.VChart.default(spec, {
		dom: chart
	})

	vchart.renderSync()
})