import React, { Component } from 'react';
import './App.css';

import Flats from "./flats"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flats</h1>
        <div className="container">
          <Flats img="https://t-ec.bstatic.com/images/hotel/max1024x768/354/35444976.jpg" rating="8.8" name="Oceanside Marina Suites - A Waterfront Hotel" link="https://www.booking.com/hotel/us/oceanside-marina-suites-oceanside.en-us.html?aid=898409;label=affnetawin-bannerindex-us-index-1_pub-143466_site-yieldkit_pname-YieldKit%20GmbH%20-%20Content_clkid-6776_1543349928_96da04dea9bbcec95b5212780f1fe948;sid=501593c4ab3e9389a973f02e01a074bb;dest_id=20014909;dest_type=city;dist=0;hapos=3;hpos=3;room1=A%2CA;sb_price_type=total;srepoch=1543349933;srfid=19775bf3d551f87a75dfdaef0f08d6644fe1f4d2X3;srpvid=210c8ed6feac00da;type=total;ucfs=1&#hotelTmpl"></Flats>
          <Flats img="https://s-ec.bstatic.com/images/hotel/max1024x768/135/135121523.jpg" rating="8.2" name="Ramada by Wyndham Oceanside" link="https://www.booking.com/hotel/us/oceanside-1440-mission-avenue.en-us.html?aid=898409&label=affnetawin-bannerindex-us-index-1_pub-143466_site-yieldkit_pname-YieldKit%20GmbH%20-%20Content_clkid-6776_1543349928_96da04dea9bbcec95b5212780f1fe948&sid=501593c4ab3e9389a973f02e01a074bb&srpvid=5a148fc7ffb202c3&ucfs=1&srpvid=5a148fc7ffb202c3&srepoch=1543350415&room1=A,A&hpos=2&hapos=2&dest_type=city&dest_id=20014909&srfid=29de619260c06ccbf8985674281a314f8709b5bbX2&from=searchresults;highlight_room=#hotelTmpl"></Flats>
          <Flats img="https://s-ec.bstatic.com/images/hotel/max1024x768/153/153797025.jpg" rating="8.8" name="The Fin Boutique Hotel" link="https://www.booking.com/hotel/us/thefinhotel.en-us.html?aid=898409;label=affnetawin-bannerindex-us-index-1_pub-143466_site-yieldkit_pname-YieldKit%20GmbH%20-%20Content_clkid-6776_1543349928_96da04dea9bbcec95b5212780f1fe948;sid=501593c4ab3e9389a973f02e01a074bb;dest_id=20014909;dest_type=city;dist=0;hapos=8;hpos=8;room1=A%2CA;sb_price_type=total;srepoch=1543350473;srfid=b93ba4bb69047c441c58ba0ccc7d985fa82b5c33X8;srpvid=fa648fe4aba20187;type=total;ucfs=1&#hotelTmpl"></Flats>
          <Flats img="https://t-ec.bstatic.com/images/hotel/max1024x768/675/67549009.jpg" rating="9.0" name="Wyndham Oceanside at the Pier" link="https://www.booking.com/hotel/us/wyndham-oceanside-at-the-pier.en-us.html?aid=898409&label=affnetawin-bannerindex-us-index-1_pub-143466_site-yieldkit_pname-YieldKit%20GmbH%20-%20Content_clkid-6776_1543349928_96da04dea9bbcec95b5212780f1fe948&sid=501593c4ab3e9389a973f02e01a074bb&srpvid=9cf88ffd3e4d00e3&ucfs=1&srpvid=9cf88ffd3e4d00e3&srepoch=1543350524&room1=A,A&hpos=17&hapos=17&dest_type=city&dest_id=20014909&srfid=4934562db063cc35038a164b7a4523306e7020bdX17&from=searchresults;highlight_room=#hotelTmpl"></Flats>
        </div>
      </div>
    );
  }
}

export default App;
