
export default create = () => 
	var marker = WE.marker([51.5, -0.09]).addTo(earth);
	marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 100, closeButton: true}).openPopup();
