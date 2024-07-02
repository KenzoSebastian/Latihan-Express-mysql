class RenderData {
    #layout = "mainLayout";

    constructor(title, nav1, nav2, nav3) {
        this.title = title;
        this.nav1 = nav1;
        this.nav2 = nav2;
        this.nav3 = nav3;
        this.layout = this.#layout;
    };
};

const dataHome = new RenderData("Home", "mx-4 active", "mx-4", "mx-4");
const dataAbout = new RenderData("About", "mx-4", "mx-4 active", "mx-4");
const dataUsers = new RenderData("Users", "mx-4", "mx-4", "mx-4 active");

module.exports = { dataHome, dataAbout, dataUsers };