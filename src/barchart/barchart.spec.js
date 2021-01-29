
describe("barchart", () => {
    beforeEach(() => {
        const scriptElement = document.createElement("script")
        scriptElement.src = "../../dist/barchart.bundle.js";
        scriptElement.type = 'module';
        document.body.appendChild(scriptElement);
        const chartElement = document.createElement('bar-chart');
        chartElement.data = [{"brand":"Ford","count":5},{"brand":"Toyota","count":7}, {"brand":"Nissan","count":1}, {"brand":"BMW","count":5}];
        chartElement.setAttribute("x-attribute-name", "brand");
        chartElement.setAttribute(  "y-attribute-name", "count");
        chartElement.setAttribute("x-label", "Brands");
        chartElement.setAttribute("y-label", "Count");
        chartElement.setAttribute("width", 700);
        chartElement.setAttribute("height", 500);
        document.body.append(chartElement);
    })
    it("should be inserted in the document", () => {
        const element = document.body.querySelector('bar-chart')
        expect(element).toBeTruthy();
    })

})

