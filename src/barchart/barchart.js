import Template from './template';
import select from "d3-selection/src/select";
import {scaleLinear, scaleBand} from "d3-scale";
import {max} from "d3-array";
import {axisLeft, axisBottom} from "d3-axis";
export class BarChart extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback(){
        const height = parseInt(this.getAttribute("height"));
        const width = parseInt(this.getAttribute("width"));
        const padding = Math.max(height, width) * 0.1;
        const data = JSON.parse(this.getAttribute("data"));
        const xAttribute = this.getAttribute("x-attribute-name");
        const yAttribute = this.getAttribute("y-attribute-name");

        const xLabel = this.getAttribute("x-label");
        const yLabel = this.getAttribute("y-label");
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = Template.render();

        const svgRef = select(this.shadowRoot.querySelector("svg"))
            .attr("viewBox", "0 0 " + width + " " + height)
            .attr("preserveAspectRatio", "xMinYMin meet")

        const yScale = scaleLinear()
            .domain([0, max(data, d => d[yAttribute])])
            .nice()
            .range([height-padding, padding])

        const xScale = scaleBand()
            .domain(data.map(item=> item[xAttribute]))
            .range([padding, width - padding])
            .paddingInner(0.5)
            .paddingOuter(0.1)

        svgRef
            .append("g")
            .classed("y-axis",true)
            .attr("transform", "translate(" + padding + ",0)")
            .call(axisLeft(yScale))

        svgRef
            .append("g")
            .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
            .call(axisBottom(xScale))
            .classed("x-axis",true)

        svgRef
            .append("text")
            .text(yLabel)
            .classed("label", true)
            .attr("text-anchor", "middle")
            .attr("x", padding - 20)
            .attr("y", padding - 30)

        svgRef
            .append("text")
            .text(xLabel)
            .classed("label", true)
            .attr("text-anchor", "middle")
            .attr("x", (width - (padding/2)) /2)
            .attr("y", height - (padding/3))

        svgRef
            .selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .classed("bar", true)
            .attr("x", (d) => xScale(d[xAttribute]))
            .attr("y", d => yScale(d[yAttribute]))
            .attr("height", d => (height - padding) - yScale(d[yAttribute]))
            .attr("width", xScale.bandwidth());

    }
}

customElements.define("bar-chart", BarChart);
