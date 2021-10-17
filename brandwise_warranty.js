(function() {

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.12.4') {
        console.log("jQuery LOADED");
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src",
            "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js");


        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);


        if (script_tag.readyState) {
            script_tag.onreadystatechange = function() { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    console.log(window.jQuery.fn.jquery);
                    scriptLoadHandler();
                }
            };
        } else {
            console.log("ONLOAD STATE");
            script_tag.onload = scriptLoadHandler;
        }
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }


    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function

        main();
    }

    /******** Our main function ********/
    function main() {
        jQuery(document).ready(function($) {
            /******* Load Bootstrap JS *******/
            var bootstrap_script = document.createElement('script');
            bootstrap_script.setAttribute("type", "text/javascript");
            bootstrap_script.setAttribute("src",
                "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");

            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(bootstrap_script);

            /******* Load Bootstrap CSS *******/
            var bootstrap_css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            });
            bootstrap_css_link.appendTo('head');
            /******* Load HTML *******/
            //var jsonp_url = "example.com/srtest?callback=?";
            //$.getJSON(jsonp_url, function (data) {
            //  $("#myModal_srsr").modal("show");
            //});
        })
    }
})();



const Widget = Object.create({
        create(chatId) {
            const wdg = document.createElement("div")
            wdg.classList.add("brandwise-warranty");
            wdg.innerHTML = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch Brandwise modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;
            console.log("Hello from brandwise");
            // Load your chat data into UI
            return wdg;
        }
    });
