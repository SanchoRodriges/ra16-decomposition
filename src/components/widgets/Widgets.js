import React from "react";
import Widget from "./Widget";
import Listing from "../list/Listing";
import ListingWithIco from "../list/ListingWithIco";

function Widgets () {

  const popularLinks = [
    {
      id: 1,
      href: '#',
      anchor: 'Недвижимость — о сталинках'
    },
    {
      id: 2,
      href: '#',
      anchor: 'Недвижимость — о сталинках'
    },
    {
      id: 3,
      href: '#',
      anchor: 'Недвижимость — о сталинках'
    },
  ]

  const tvLinks = [
    {
      id: 1,
      href: '#',
      anchor: '02:00 ТНТ Best ТНТ International'
    },
    {
      id: 2,
      href: '#',
      anchor: '02:00 ТНТ Best ТНТ International'
    },
    {
      id: 3,
      href: '#',
      anchor: '02:00 ТНТ Best ТНТ International'
    },
  ]

  const liveLinks = [
    {
      id: 1,
      href: '#',
      img: 'https://picsum.photos/10/10',
      anchor: 'Управление как искусство Успех'
    },
    {
      id: 2,
      href: '#',
      img: 'https://picsum.photos/10/10',
      anchor: 'Управление как искусство Успех'
    },
    {
      id: 3,
      href: '#',
      img: 'https://picsum.photos/10/10',
      anchor: 'Управление как искусство Успех'
    },
  ]

  return (
    <div className="widgets">

        <div className="column-3">
          <Widget class="weather" href="#" name="Погода">
            <div className="row">
              <img src="https://picsum.photos/32/32" />
              <div>17°</div>
              <div>утром 17°, <br />днём 17°</div>
            </div>
          </Widget>

          <Widget class="popular" href="#" name="Посещаемое">
            <Listing items={popularLinks} />
          </Widget>
        </div>
        
        <div className="column-3">
          <Widget class="maps" href="#" name="Карта Германии">
            <p>Расписания</p>
          </Widget>

          <Widget class="tv" href="#" name="Телепрограмма">
            <Listing items={tvLinks} />
          </Widget>
        </div>

        <div className="column-3">
          <Widget class="live" href="#" name="Эфир">
            <ListingWithIco items={liveLinks} />
          </Widget>
        </div>
        
      </div>

  );
}

export default Widgets;
