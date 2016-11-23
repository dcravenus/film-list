<film-card>
        <div>
            <a href="https://www.rottentomatoes.com/{url}"><img src="{posters.primary}"></a>
        </div>
        <div>
            <h2>{title} - {tomatoScore}% <i onclick="addFavorite({id})" class="icon-plus"></i> <i onclick="removeFavorite({id})" class="icon-minus"></i></h2>
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
