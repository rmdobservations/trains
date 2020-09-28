 let displayFeatureInformation = function(pixel) {
        var features = [];
        map.forEachFeatureAtPixel(pixel, function(feature) {
        //	console.log("Feature Info: ",feature)
          features.push(feature);
        });
        if (features.length > 0) {
          var info = [];
          var i, ii;
          for (i = 0, ii = features.length; i < ii; ++i) {
            info.push(features[i].get('name'));
            
          }
          
          document.getElementById('featureinfo').innerHTML = info.join(', ') || '(unknown)';
         // map.getTarget().style.cursor = 'pointer';
        } else {
          document.getElementById('featureinfo').innerHTML = '&nbsp;';
          //map.getTarget().style.cursor = '';
        }
      };
