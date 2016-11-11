import React, { Component } from 'react';

export default class Globe extends Component {
  render() {
    return (
    	<div>
    	<script src="http://www.webglearth.com/v2/api.js"></script>
    	{
    		(function initialize() {
				  let earth = new WE.map('my_earth');
				  earth.setView([46.8011, 8.2266], 10);
				  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
				    attribution: '© OpenStreetMap contributors'
				  }).addTo(earth);

				  // Start a simple rotation animation
				  var before = null;
				  requestAnimationFrame(function animate(now) {
				      var c = earth.getPosition();
				      var elapsed = before? now - before: 0;
				      before = now;
				      earth.setCenter([c[0], c[1] - 0.1*(elapsed/360)]);
				      requestAnimationFrame(animate);
				  });
				})()
    	}

				<div id="my_earth" ></div>
    	
			</div>
    )
  }
}
