import React, { Component } from 'react'
import SearchCards from './search_page_cards'
import SearchFooter from './search_page_footer'
import SearchPageHeader from './search_page_header'
import SearchSearch from './search_page_search'

import mountCamp from '../../Assets/Camp Images/Compressed Images/Mount\ Ulap.jpg'
import calaguasCamp from '../../Assets/Camp Images/Compressed Images/Calaguas\ Island.jpg'
import onayCamp from '../../Assets/Camp Images/Compressed Images/Onay\ Beach.jpg'
import sevenSisterCamp from '../../Assets/Camp Images/Compressed Images/Seven\ Sisters\ Waterfall.jpg'
import latikCamp from '../../Assets/Camp Images/Compressed Images/Latik\ Riverside.jpg'
import buloyCamp from '../../Assets/Camp Images/Compressed Images/Buloy\ Springs.jpg'

export class SearchPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [ //here we can import data from a database that save the information about our avalibale camps
        {
          p: 'Mount Ulap',
          text: 'One of the most famous hikes in Benguest is Mt Ukap in Itogon.',
          price: '104.99',
          textForIndividual: 'Mount Ulap is a 7.7 kilometr moderately trafficked point-to-point trail' +
          'locketed newr Tuba, Benguet, Phillippines that offers the chance to see wildlife and is rated' +
          'as moderate. The trail is promarily used for hiking.',
          author: 'Andrew Mike',
          img: mountCamp,
        },
        {
          p: 'Calaguas Islands',
          text:'A paradise of Islands that can rival the white sand beauty of Boracay.',
          price: '317.99',
          textForIndividual: 'Calaguas, also known as Calaguas Islands, is a group of islands located in the Philippine province of Camarines Norte. It includes the major islands of Tinaga Island and Guintinua Island, the minor Maculabo Island, as well as several other minor. The group of islands is around 200 km away from the capital city of Manila and can be accessed through the ports at Paracale and Daet, Camarines Norte.',
          author: 'Andrew Mike',
          img: calaguasCamp,
        },
        {
          p: 'Onay Beach',
          text: 'This is one of the best beach camping sites, beautiful and pristine.',
          price: '219.99',
          textForIndividual: 'Onay Beach is a long, long stretch, with one side fringed with thick vegetation and the other soaked in turquoise water. As I stood at the mouth of the main access point in the middle of the cove, I could hardly see its north end, seemingly disappearing in the droplets that the waves spray into the air.',
          author: 'Andrew Mike',
          img: onayCamp,
        },
        {
          p: 'The Seven Sisters Waterfall',
          text: 'The Seven Sisters is the 38th tallest waterfall in Norway.',
          price: '157.99',
          textForIndividual: 'The Seven Sisters (Norwegian: De Syv Søstrene or Dei sju systrene, also known as Knivsflåfossen) is the 39th tallest waterfall in Norway. The 410-metre (1,350 ft) tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres (820 ft).',
          author: 'Andrew Mike',
          img: sevenSisterCamp,
        },
        {
          p: 'Latik Riverside',
          text: 'Philippines is one if the most dazzling countries in all of Asia.',
          price: '199.60',
          textForIndividual: 'Mount Ulap is a 7.7 kilometr moderately trafficked point-to-point trail' +
          'locketed newr Tuba, Benguet, Phillippines that offers the chance to see wildlife and is rated' +
          'as moderate. The trail is promarily used for hiking.',
          author: 'Andrew Mike',
          img: latikCamp,
        },
        {
          p: 'Buloy Springs',
          text: 'This is one of the best beach camping sites, beautiful and pristine.',
          price: '115.50',
          textForIndividual: 'Mount Ulap is a 7.7 kilometr moderately trafficked point-to-point trail' +
          'locketed newr Tuba, Benguet, Phillippines that offers the chance to see wildlife and is rated' +
          'as moderate. The trail is promarily used for hiking.',
          author: 'Andrew Mike',
          img: buloyCamp,
        },
      ],
    }
  }
  render() {
    return (
      <div className='searchPage'>
        <SearchPageHeader/>
        <SearchSearch/>
        <SearchCards items={this.state.items}/>
        <SearchFooter/>
      </div>
    )
  }
}

export default SearchPage