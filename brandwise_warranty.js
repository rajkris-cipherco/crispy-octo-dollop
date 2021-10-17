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


const Widget = Object.create({
        create(chatId) {
            const wdg = document.createElement("div")
            wdg.classList.add("brandwise-warranty");
            wdg.innerHTML = `<button type="button" class="btn btn-primary" onclick="alert('Hello from Brandwise!')">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>`;
            console.log("Hello from brandwise");
            // Load your chat data into UI
            return wdg;
        }
    });


})();
