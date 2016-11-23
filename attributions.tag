<attributions>
    <p id="attributions">Attributions</p>
    <div id="attributions-container">
        <p><i class="icon-dvd"></i> Created by Creative Stall from the Noun Project</p>
        <p><i class="icon-tickets"></i> Created by Ralf Schmitzer from the Noun Project</p>
    </div>

    <style>
        #attributions {
            color: #0645AD;
            cursor: pointer;
            font-family: sans-serif;
        }
        #attributions-container {
            opacity: 0;
            transition: opacity 1s ease-out;
        }
        #attributions-container.visible {
            opacity: 1;
            transition: opacity 1s ease-out;
        }
    </style>

    this.on('mount', function() {
        var attributionsTag = document.getElementById('attributions');
        var attributionsContainerTag = document.getElementById('attributions-container');
        attributionsTag.onclick = function() {
            if(attributionsContainerTag.className === '') {
                attributionsContainerTag.className = 'visible';
            } else {
                attributionsContainerTag.className = '';
            }
        };
    })


</attributions>
