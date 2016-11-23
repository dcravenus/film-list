<film-card>
        <div>
            <img src="{posters.primary}">
        </div>
        <div>
            <h2>{title} - {tomatoScore}%</h2>
            <p>{mpaaRating}, {runtime}</p>
            <p class="release-dates"><span><i class="icon-tickets"></i> {theaterReleaseDate}</span><span><i class="icon-dvd"></i> {dvdReleaseDate}</span></p>
            <p>{synopsis}</p>
        </div>

        <style>
            film-card {
                display: table;
                font-family: sans-serif;
            }
            film-card > div {
                display: table-cell;
                vertical-align: middle;
                padding-right: 10px;
            }
            i {
                font-size: 150%;
                vertical-align: middle;
            }
            .release-dates > span {
                margin-right: 10px;
            }

        </style>
</film-card>
