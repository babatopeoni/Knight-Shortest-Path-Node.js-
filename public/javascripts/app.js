
let path = [], shortestPath = [];

//wait time to display result of shortest path
const displayWaitTime = 1500;

jQuery('.square').on('click',function(){
    //Put knight on first click and add index to path array
    if (path.length < 1) {
        //Reset All squares
        jQuery('body .square').html("");
        shortestPath = [];
        jQuery('#source').html("");
        jQuery('#destination').html("");

        //Add starting positions
        jQuery('#source').html( 'Starting Position: ' +  jQuery(this).data('name') );
        path.push(jQuery('.square').index(this)); 
        jQuery(this).html("&#9822;");
        jQuery('#info').html("Select destination position");
        // Add second click index to path array and execute KnightsShortestPath
    } else if (path.length === 1) {
        path.push(jQuery('.square').index(this));
        

        //Get shortest position
        jQuery.post('/get_shortest_path', { path: path }, function (shortestPath){
            // Render knights on path locations
            var destination = "<h2>" + shortestPath.length + " steps.</h2>  Path: ";
            shortestPath.forEach(function (knightLanding, index) {
                setTimeout(function () {
                    square = jQuery(`[data-index = "${knightLanding.toString()}"]`);
                    square.html(`&#9822; ${index + 1}`)
                    destination += " -> " +square.data('name');
                    jQuery('#destination').html(destination);
                    // landing.innerHTML = `&#9822; ${index + 1}`;
                }, index * displayWaitTime);
            });
            setTimeout(function () { jQuery('#info').html("Select another starting position "); }, shortestPath.length * displayWaitTime )
        
            shortestPath = [];
            path = [];
        });

        
    }

    
});