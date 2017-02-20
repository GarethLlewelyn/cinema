var ui = new WebUIWindow("cinema", "client_packages://cinema/ui/index.html", new Vector2(469, 784));
ui.autoRenderTexture = false;

// position: new Vector3f(3697.1513671875, 1026.405029296875, 1439.3914794921875), rotation: new Vector3f(-3.1415927410125732, -0.15361231565475464, 3.1415927410125732)

let m = new Matrix().Translate(new Vector3f(7856.84716796875, 2957.11085084375, -6442.41015625));
//m.Rotate(-3.1415927410125732, new Vector3f(1, 0, 0));
m = m.Rotate(0.082, new Vector3f(0, 0.4987713396549225, 0));
//m.Rotate(3.1415927410125732, new Vector3f(0, 0, 1));
jcmp.events.Add("GameUpdateRender", (renderer) => {
    renderer.SetTransform(m);
    renderer.DrawTexture(ui.texture, new Vector3f(0, 0, 0), new Vector2f(1.25, 3.02));
});