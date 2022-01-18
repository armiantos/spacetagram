import { Image } from './data/Image';
import { RootState } from './redux/store';

export const mockRootState: RootState = {
    explore: {
        images: [],
        isLoading: false,
    },
    likedImages: {
        images: [],
    },
    focus: {},
    _persist: {
        version: 1,
        rehydrated: false,
    },
};

export const mockImages: Image[] = [
    {
        copyright: 'Nigel Sharp',
        date: '2000-08-15',
        explanation:
            "It is still not known why the Sun's light is missing some colors.  Shown above are all the visible colors of the Sun, produced by passing the Sun's light through a prism-like device.  The above spectrum was created at the McMath-Pierce Solar Observatory and shows, first off, that although our yellow-appearing Sun emits light of nearly every color, it does indeed appear brightest in yellow-green light.  The dark patches in the above spectrum arise from gas at or above the Sun's surface absorbing sunlight emitted below.  Since different types of gas absorb different colors of light, it is possible to determine what gasses compose the Sun.  Helium, for example, was first discovered in 1870 on a solar spectrum and only later found here on Earth.  Today, the majority of spectral absorption lines have been identified - but not all.",
        hdurl: 'https://apod.nasa.gov/apod/image/0008/solarspectrum_noao.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'The Solar Spectrum',
        url: 'https://apod.nasa.gov/apod/image/0008/solarspectrum_noao.jpg',
    },
    {
        copyright: 'Robert Gendler',
        date: '2015-08-30',
        explanation:
            "What is the nearest major galaxy to our own Milky Way Galaxy?  Andromeda.  In fact, our Galaxy is thought to look much like Andromeda. Together these two galaxies dominate the Local Group of galaxies. The diffuse light from Andromeda is caused by the hundreds of billions of stars that compose it. The several distinct stars that surround Andromeda's image are actually stars in our Galaxy that are well in front of the background object. Andromeda is frequently referred to as M31 since it is the 31st object on Messier's list of diffuse sky objects. M31 is so distant it takes about two million years for light to reach us from there. Although visible without aid, the above image of M31 is a digital mosaic of 20 frames taken with a small telescope. Much about M31 remains unknown, including exactly how long it will before it  collides with our home galaxy.   Explore your Universe: Random APOD Generator",
        hdurl: 'https://apod.nasa.gov/apod/image/1508/m31_gendler_1955.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'M31: The Andromeda Galaxy',
        url: 'https://apod.nasa.gov/apod/image/1508/m31_gendler_960.jpg',
    },
    {
        date: '2003-11-27',
        explanation:
            "The long shadow of the Moon fell across the continent of Antarctica on November 23rd, during the second solar eclipse of 2003. In this view from orbit, based on data from the MODIS instrument on board the Earth observing Aqua satellite, the Moon's shadow stretches for almost 500 kilometers. Recorded between 23:15 and 23:20 Universal Time, the shadow was cast by a lunar disk silhouetted by the Sun hanging only about 15 degrees above the antarctic horizon. Observers within the central dark portion of the oval-shaped shadow could view the totally eclipsed sun. Shadows of mountains and clouds are also visible over the Norwegian named Queen Maud Land, Antarctica with the South Pole just beyond the lower right corner of the image.",
        hdurl: 'https://apod.nasa.gov/apod/image/0311/tse031123_modis_full.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'The Long Shadow of the Moon',
        url: 'https://apod.nasa.gov/apod/image/0311/tse031123_modis_c1.jpg',
    },
    {
        date: '2015-08-16',
        explanation:
            "This is the mess that is left when a star explodes.  The Crab Nebula, the result of a supernova seen in 1054 AD, is filled with mysterious filaments.  The filaments are not only tremendously complex, but appear to have less mass than expelled in the original supernova and a higher speed than expected from a free explosion.  The featured image, taken by the Hubble Space Telescope, is presented in three colors chosen for scientific interest.  The Crab Nebula spans about 10 light-years.  In the nebula's very center lies a pulsar: a neutron star as massive as the Sun but with only the size of a small town.  The Crab Pulsar rotates about 30 times each second.   Students (of all ages): See free astronomy lectures online",
        hdurl: 'https://apod.nasa.gov/apod/image/1508/crab_hubble_3864.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'M1: The Crab Nebula from Hubble',
        url: 'https://apod.nasa.gov/apod/image/1508/crab_hubble_960.jpg',
    },
    {
        copyright: 'SSROPROMPT',
        date: '2013-01-08',
        explanation:
            'The grand, winding arms are almost mesmerizing in this face-on view of NGC 7424, a spiral galaxy with a prominent central bar. About 40 million light-years distant in the headlong constellation Grus, this island universe is also about 100,000 light-years across making it remarkably similar to our own Milky Way. Following along the winding arms, many bright clusters of massive young stars can be found. The star clusters themselves are several hundred light-years in diameter. And while massive stars are born in the arms of NGC 7424, they also die there. Notably, this galaxy was home to a powerful stellar explosion, supernova SN 2001ig, which faded well before the above image was recorded.   Follow APOD on: Facebook (Daily) (Sky) (Spanish) or Google Plus (Daily) (River)',
        hdurl: 'https://apod.nasa.gov/apod/image/1301/ngc7424_ssro_3567.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Grand Spiral Galaxy NGC 7424',
        url: 'https://apod.nasa.gov/apod/image/1301/ngc7424_ssro_960.jpg',
    },
    {
        copyright: 'Robert Q. Fugate',
        date: '2020-02-04',
        explanation:
            "Seeing mountain peaks glow red from inside the Grand Canyon was one of the most incredible sunset experiences of this amateur photographer's life. They appeared even more incredible later, when digitally combined with an exposure of the night sky -- taken by the same camera and from the same location -- an hour later.  The two images were taken last August from the 220 Mile Canyon campsite on the Colorado River, Arizona, USA. The peaks glow red because they were lit by an unusually red sunset.  Later, high above, the band of the Milky Way Galaxy angled dramatically down, filled with stars, nebula, and dark clouds of dust. To the Milky Way's left is the planet Saturn, while to the right is the brighter Jupiter.  Although Jupiter and Saturn are now hard to see, Venus will be visible and quite bright to the west in clear skies, just after sunset, for the next two months.    Astrophotography with Your Computer: NASA's Astrophoto Challenges",
        hdurl: 'https://apod.nasa.gov/apod/image/2002/GrandCanyonSunset_Fugate_6586.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'A Sunset Night Sky over the Grand Canyon',
        url: 'https://apod.nasa.gov/apod/image/2002/GrandCanyonSunset_Fugate_960.jpg',
    },
    {
        date: '2009-06-01',
        explanation:
            "Will Spirit be able to free itself from soft ground on Mars? The robotic Spirit rover currently rolling across Mars ran into unexpectedly soft ground last month while exploring the red planet. A worry is that the ground is so soft that Spirit won't be able to free itself, will have to stay put and thereafter study what it can from its current position near an unusual martian land feature named Home Plate. Pictured above, the front left wheel appears to be primarily digging itself in when spun, while on the other side, the front right wheel no longer spins and is dragged by the five year old mechanical explorer.  In the distance, rocks and rusty dirt fill the alien landscape in front of the distant Husband Hill.  NASA continues to study the situation, and engineers and scientists have not yet run out of ideas of how to use Spirit's six wheels. Far across Mars, Spirit's twin Opportunity continues on its two year trek toward Endeavour crater.    Free Lecture: An APOD editor will review great space images this Friday in Kalamazoo, Michigan.  digg_url = 'http://apod.nasa.gov/apod/ap090601.html'; digg_skin = 'compact';",
        hdurl: 'https://apod.nasa.gov/apod/image/0906/softsoil_spirit_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Spirit Encounters Soft Ground on Mars',
        url: 'https://apod.nasa.gov/apod/image/0906/softsoil_spirit.jpg',
    },
    {
        copyright: "Martin PughHeaven's Mirror Observatory",
        date: '2018-04-08',
        explanation:
            "Ten thousand years ago, before the dawn of recorded human history, a new light would have suddenly have appeared in the night sky and faded after a few weeks.  Today we know this light was from a supernova, or exploding star, and record the expanding debris cloud as the Veil Nebula, a supernova remnant.  This sharp telescopic view is centered on a western segment of the Veil Nebula cataloged as NGC 6960 but less formally known as the Witch's Broom Nebula.  Blasted out in the cataclysmic explosion, the interstellar shock wave plows through space sweeping up and exciting interstellar material. Imaged with narrow band filters, the glowing filaments are like long ripples in a sheet seen almost edge on, remarkably well separated into atomic hydrogen (red) and oxygen (blue-green) gas. The complete supernova remnant lies about 1400 light-years away towards the constellation Cygnus. This Witch's Broom actually spans about 35 light-years. The bright star in the frame is 52 Cygni, visible with the unaided eye from a dark location but unrelated to the ancient supernova remnant.",
        hdurl: 'https://apod.nasa.gov/apod/image/1804/ngc6960_Pugh_2000.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: "NGC 6960: The Witch's Broom Nebula",
        url: 'https://apod.nasa.gov/apod/image/1804/ngc6960_Pugh_960.jpg',
    },
    {
        copyright: 'Jean-Charles\nCuillandre',
        date: '2007-01-30',
        explanation:
            'NGC 2359 is a striking emission nebula with an impressive popular name - Thor\'s Helmet Sure, its suggestive winged appearance might lead some to refer to it as the "duck nebula", but if you were a nebula which name would you choose? By any name NGC 2359 is a bubble-like nebula some 30 light-years across, blown by energetic winds from an extremely hot star seen near the center and classified as a Wolf-Rayet star. Wolf-Rayet stars are rare massive blue giants which develop stellar winds with speeds of millions of kilometers per hour. Interactions with a nearby large molecular cloud are thought to have contributed to this nebula\'s more complex shape and curved bow-shock structures. NGC 2359 is about 15,000 light-years distant toward the constellation Canis Major.',
        hdurl: 'https://apod.nasa.gov/apod/image/0701/thor_cfht_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: "Thor's Helmet from CFHT",
        url: 'https://apod.nasa.gov/apod/image/0701/thor_cfht.jpg',
    },
    {
        date: '1998-06-29',
        explanation:
            "Is that our Sun? The unusual banana-shaped loops shown above are actually part of a computer-generated snap-shot of our Sun's magnetic field.  This animated frame was constructed using data from the ground-based U.S. Solar Vector Magnetograph and the space-based Japanese X-Ray Telescope Yohkoh. Surfaces of constant magnetic field strength loop through the Sun's corona, break through the Sun's surface, and connect regions of magnetic activity such as sunspots.  Recently, contact has been interrupted with the Sun-watching SOHO satellite.  Although SOHO had completed its two year mission, attempts are still being made to re-establish communication.",
        hdurl: 'https://apod.nasa.gov/apod/image/9806/sunfield_msfc_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Solar Magnetic Bananas',
        url: 'https://apod.nasa.gov/apod/image/9806/sunfield_msfc_big.jpg',
    },
    {
        date: '2000-01-22',
        explanation:
            "Indicated on this infrared image of the galactic center region is the position of SGR 1900+14 - the strongest known magnet in the galaxy. SGR 1900+14 is believed to be a city-sized, spinning, super-magnetic neutron star, or Magnetar. How strong is a Magnetar's magnetic field? The Earth's magnetic field which deflects compass needles is measured to be about 1 Gauss, the strongest fields sustainable in Earth-based laboratories are about 100,000 Gauss, yet the Magnetar's monster magnetic field is estimated to be 1,000,000,000,000,000 Gauss. A magnet this strong, located at about half the distance to the Moon would easily erase your credit cards and suck pens out of your pocket. In 1998, from a distance of about 20,000 light-years, SGR 1900+14 generated a powerful flash of gamma-rays detected by many spacecraft. That blast of high-energy radiation is now known to have had a measurable effect on Earth's ionosphere. At the surface of the Magnetar, its powerful magnetic field is thought to buckle and shift the neutron star crust generating the intense gamma-ray flares.",
        hdurl: 'https://apod.nasa.gov/apod/image/0001/magnetarcobe_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Magnetar In The Sky',
        url: 'https://apod.nasa.gov/apod/image/0001/magnetarcobe.jpg',
    },
    {
        copyright: 'Panther Observatory',
        date: '2008-04-03',
        explanation:
            "This tantalizing array of nebulae and stars can be found about 2 degrees south of the famous star-forming Orion Nebula. The region abounds with energetic young stars producing jets and outflows that push through the surrounding material at speeds of hundreds of kilometers per second. The interaction creates luminous shock waves known as Herbig-Haro (HH) objects. For example, the graceful, flowing arc just right of center is cataloged as HH 222, also called the Waterfall Nebula. Seen below the Waterfall, HH 401 has a distinctive cone shape. The bright bluish nebula below and left of center is NGC 1999, a dusty cloud reflecting light from an embedded variable star. The entire cosmic vista spans over 30 light-years, near the edge of the Orion molecular cloud complex some 1,500 light-years distant.   digg_url = 'http://apod.nasa.gov/apod/ap080403.html'; digg_skin = 'compact';",
        hdurl: 'https://apod.nasa.gov/apod/image/0804/HH34F3_schedler.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'South of Orion',
        url: 'https://apod.nasa.gov/apod/image/0804/HH34F3_schedler_c800.jpg',
    },
    {
        copyright: 'highest\ncommunications tower',
        date: '2009-02-01',
        explanation:
            "Higher than highest communications tower, higher than highest mountain, higher than highest airplane, lies the realm of the aurora.  Auroras rarely reach below 60 kilometers, and can range up to 1000 kilometers.  Aurora light results from energetic electrons and protons striking molecules in the Earth's atmosphere.  Frequently, when viewed from space, a complete aurora will appear as a circle around one of the Earth's magnetic poles.  This particularly rare purple auroral corona occurred in 2004 high above Harstad, Norway.   digg_url = 'http://apod.nasa.gov/apod/ap090201.html'; digg_skin = 'compact';",
        hdurl: 'https://apod.nasa.gov/apod/image/0902/toweraurora_nettfoto_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Auroral Corona Over Norway',
        url: 'https://apod.nasa.gov/apod/image/0902/toweraurora_nettfoto_rf.jpg',
    },
    {
        date: '2004-02-16',
        explanation:
            'Some patches of Mars are full of mysterious tiny spherules.  The microscopic imager on board the Opportunity rover on Mars recorded, last week, the above image showing over a dozen.  The image was taken near a rock outcrop called Stone Mountain and spans roughly 6 centimeters across.  A typical diameter for one of the pictured spherules is only about 4 millimeters, roughly the size of a small blueberry.  The spherules appear to be much grayer and harder than surrounding rock.  Debate rages on the origin of the tiny spherules, and whether their shape has to do with a slow accumulation of sediments suspended in water, or flash-frozen rock expelled during a meteor impact or volcanic eruption.  A layered spherule, if ever found, would favor a water-based origin.  Meanwhile, Opportunity is being programmed to dig into the Martian surface of Meridiani Planum to see what is there.',
        hdurl: 'https://apod.nasa.gov/apod/image/0402/berries_opportunity_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'A Patch of Spherules on Mars',
        url: 'https://apod.nasa.gov/apod/image/0402/berries_opportunity.jpg',
    },
    {
        copyright: 'Tamas Ladanyi',
        date: '2007-12-05',
        explanation:
            'Comet Holmes refuses to fade.  The unusual comet that surprisingly brightened nearly a million-fold in late October continues to remain visible to the unaided eye from dark locations.  Night to night, Comet 17P/Holmes is slowly gliding through the constellation Perseus, remaining visible to northern observers during much of the night right from sunset.  Pictured above, Comet Holmes was captured from Hungary last week.  The remarkable snowball continues to retain a huge coma, but now shows very little of a tail.   To the far right is the open cluster of stars NGC 1245. How much longer Comet Holmes will remain visible to the unaided eye is unknown.',
        hdurl: 'https://apod.nasa.gov/apod/image/0712/holmes_ladanyi_big.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Comet Holmes Over Hungary',
        url: 'https://apod.nasa.gov/apod/image/0712/holmes_ladanyi.jpg',
    },
    {
        copyright: 'Doug Zubenel',
        date: '2012-02-13',
        explanation:
            "Why would Venus appear oval? Venus has been seen countless times from the surface of the Earth, and every time the Earth's atmosphere has dispersed its light to some degree. When the air has just the right amount of dust or water droplets, small but distant objects like Venus appear spread out into an angularly large aureole. Aureoles are not unusual to see and are frequently noted as circular coronas around the Sun or Moon. Recently, however, aureoles have been imaged that are not circular but distinctly oval.  The above oval Venusian aureole was imaged by the astrophotographer who first noted the unusual phenomenon three years ago. Initially disputed, the unusual distortion has now been confirmed multiple times by several different astrophotographers. What causes the ellipticity is currently unknown, and although several hypotheses hold that horizontally oriented ice crystals are responsible, significant discussions about it are still taking place.",
        hdurl: 'https://apod.nasa.gov/apod/image/1202/venusoval_zubenel_1600.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'An Unusual Venusian Oval',
        url: 'https://apod.nasa.gov/apod/image/1202/venusoval_zubenel_960.jpg',
    },
    {
        date: '2003-07-14',
        explanation:
            "Thousands of satellites orbit the Earth.  Costing billions of dollars, this swarm of high altitude robots is now vital to communication, orientation, and imaging both Earth and space.  One common type of orbit is geostationary where a satellite will appear to hover above one point on Earth's equator.  Geostationary orbits are very high up -- over five times the radius of the Earth -- and possible only because the satellite orbital period is exactly one day.  It is usually cheaper to place a satellite in low Earth orbit, around 500 kilometers, just high enough to avoid the effect of Earth's atmosphere.  The above animated sequence starts by showing the halo of Earth's satellites, including the ring at geostationary, and finishes by zooming in on the only one currently hosting humans: the International Space Station.",
        hdurl: 'https://apod.nasa.gov/apod/image/0307/earthsat_fu_big.gif',
        media_type: 'image',
        service_version: 'v1',
        title: 'The Satellites that Surround Earth',
        url: 'https://apod.nasa.gov/apod/image/0307/earthsat_fu.gif',
    },
    {
        copyright: 'Will Godward',
        date: '2021-07-19',
        explanation:
            "The photographer had this shot in mind for some time. He knew that objects overhead are the brightest -- since their light is scattered the least by atmospheric air. He also that knew the core of our Milky Way Galaxy was just about straight up near midnight around this time of year in South Australia.  Chasing his mental picture, he ventured deep inside the Kuipto Forest where tall radiata pines blocked out much of the sky -- but not in this clearing.  There, through a window framed by trees, he captured his envisioned combination of local and distant nature. Sixteen exposures of both trees and the Milky Way Galaxy were recorded. Antares is the bright orange star to left of our Galaxy's central plane, while Alpha Centauri is the bright star just to the right of the image center.  The direction toward our Galaxy's center is below Antares.  Although in a few hours the Earth's rotation moved the Galactic plane up and to the left -- soon invisible behind the timber, his mental image was secured forever -- and is featured here.    Follow APOD on Instagram in: English, Farsi, Indonesian, Persian, Portuguese or Taiwanese",
        hdurl: 'https://apod.nasa.gov/apod/image/2107/ForestWindow_Godward_2236.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Framed by Trees: A Window to the Galaxy',
        url: 'https://apod.nasa.gov/apod/image/2107/ForestWindow_Godward_960.jpg',
    },
    {
        copyright: 'Derek Santiago',
        date: '2010-09-25',
        explanation:
            "Cosmic clouds seem to form fantastic shapes in the central regions of emission nebula IC 1805. Of course, the clouds are sculpted by stellar winds and radiation from massive hot stars in the nebula's newborn star cluster, Melotte 15. About 1.5 million years young, the cluster stars are near the center in this colorful skyscape, along with dark dust clouds silhouetted against glowing atomic gas. A composite of narrow and broad band telescopic images, the view spans about 40 light-years and includes emission from hydrogen in green, sulfur in red, and oxygen in blue hues. Wider field images reveal that IC 1805's simpler, overall outline suggests its popular name - The Heart Nebula. IC 1805 is located about 7,500 light years away toward the constellation Cassiopeia.",
        hdurl: 'https://apod.nasa.gov/apod/image/1009/IC1805Crop_santiago.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Melotte 15 in the Heart',
        url: 'https://apod.nasa.gov/apod/image/1009/IC1805Crop_santiago800.jpg',
    },
    {
        copyright: 'Eric J. Zbinden',
        date: '2009-02-06',
        explanation:
            "On February 2nd, a first quarter Moon shone in planet Earth's early evening sky. As seen from a location on the US west coast near Mt. Hamilton, California, the International Space Station also arched above the horizon, crossing in front of the Moon's sunlit surface. The space station's transit lasted 0.49 seconds. This sharp exposure, a well-timed telescopic image, recorded the space station during the transit against the background of the Moon's smooth Mare Serenitatis (Sea of Serenity",
        hdurl: 'https://apod.nasa.gov/apod/image/0902/ISS_0082_2009-02-02x2cropped.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Space Station in the Moon',
        url: 'https://apod.nasa.gov/apod/image/0902/ISS_0082_2009-02-02x2cropped800.jpg',
    },
];
