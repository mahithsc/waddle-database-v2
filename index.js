const puppeteer = require('puppeteer');
const fs = require('fs/promises');


const teamsID = [
    'https://www.espn.com/nfl/team/depth/_/name/buf',
    'https://www.espn.com/nfl/team/depth/_/name/mia',
    'https://www.espn.com/nfl/team/depth/_/name/ne',
    'https://www.espn.com/nfl/team/depth/_/name/nyj',
    'https://www.espn.com/nfl/team/depth/_/name/bal',
    'https://www.espn.com/nfl/team/depth/_/name/cin',
    'https://www.espn.com/nfl/team/depth/_/name/cle',
    'https://www.espn.com/nfl/team/depth/_/name/pit',
    'https://www.espn.com/nfl/team/depth/_/name/hou',
    'https://www.espn.com/nfl/team/depth/_/name/ind',
    'https://www.espn.com/nfl/team/depth/_/name/jax',
    'https://www.espn.com/nfl/team/depth/_/name/ten',
    'https://www.espn.com/nfl/team/depth/_/name/den',
    'https://www.espn.com/nfl/team/depth/_/name/kc',
    'https://www.espn.com/nfl/team/depth/_/name/lv',
    'https://www.espn.com/nfl/team/depth/_/name/lac/los-angeles-chargers',
    'https://www.espn.com/nfl/team/depth/_/name/dal',
    'https://www.espn.com/nfl/team/depth/_/name/nyg',
    'https://www.espn.com/nfl/team/depth/_/name/phi',
    'https://www.espn.com/nfl/team/depth/_/name/wsh/washington',
    'https://www.espn.com/nfl/team/depth/_/name/chi',
    'https://www.espn.com/nfl/team/depth/_/name/det',
    'https://www.espn.com/nfl/team/depth/_/name/gb',
    'https://www.espn.com/nfl/team/depth/_/name/min',
    'https://www.espn.com/nfl/team/depth/_/name/atl',
    'https://www.espn.com/nfl/team/depth/_/name/car',
    'https://www.espn.com/nfl/team/depth/_/name/no',
    'https://www.espn.com/nfl/team/depth/_/name/tb',
    'https://www.espn.com/nfl/team/depth/_/name/ari',
    'https://www.espn.com/nfl/team/depth/_/name/sf',
    'https://www.espn.com/nfl/team/depth/_/name/sea',
    'https://www.espn.com/nfl/team/depth/_/name/lar'

];

const initBrowser = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    return [page, browser]
}

const getData = async () => {

    //navigating to the page
    const [page, browser] = await initBrowser()
    await page.goto('https://espn.com')
}

getData()

