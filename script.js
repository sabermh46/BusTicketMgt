var bus = document.querySelector('.busContainer');
var wheel = document.querySelectorAll('.wheel');

window.addEventListener('scroll', (e)=>{
    var scY = window.scrollY;
    if(scY < 1001){
        bus.style.transform = `translateX(-${scY}px)`;
        wheel.forEach(wh => {
            wh.style.transform = `rotate(-${scY * 1.5}deg)`;
        })
    }
    
    console.log(scY);
})

document.querySelector('#dest_from').autocomplete({
    source: cities,
    minLength: 2,
    search: function (oEvent, oUI) {
        // get current input value
        var sValue = document.querySelector(oEvent.target).value;
        // init new search array
        var aSearch = [];
        // for each element in the main array ...
        document.querySelector(cities).each(function (iIndex, sElement) {
            // ... if element starts with input value ...
            if (sElement.city_name.substr(0, sValue.length).toUpperCase() == sValue.toUpperCase() && sElement.is_enable_for_web == 1) {
                // ... add element
                if (sElement.city_name.toUpperCase() != document.querySelector('#dest_to').value.toUpperCase()) {
                    aSearch.push(sElement.city_name);
                }
            }
        });
        // change search array
        document.querySelector(this).autocomplete('option', 'source', aSearch);
    },
    select: function (oEvent, oUI) {
        if (oEvent.keyCode !== 9) {
            document.querySelector('#dest_to').focus();
        }
    }
});

var cities = [{
    "city_id": 186,
    "city_name": " Manikganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 164
}, {
    "city_id": 584,
    "city_name": "Aditmari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Aditmari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-08 20:57:14",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 584
}, {
    "city_id": 506,
    "city_name": "Agartala",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Agartala",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 506
}, {
    "city_id": 242,
    "city_name": "Akkelpur",
    "city_status": 1,
    "sequence": 878,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 242
}, {
    "city_id": 592,
    "city_name": "Alamdanga ",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "A",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 592
}, {
    "city_id": 518,
    "city_name": "Alengkhali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "a",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 518
}, {
    "city_id": 595,
    "city_name": "Alfadanga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "A",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 595
}, {
    "city_id": 509,
    "city_name": "Ali Kadam",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Ali Kadam",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 509
}, {
    "city_id": 640,
    "city_name": "Alipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Alipur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-20 12:06:00",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 640
}, {
    "city_id": 257,
    "city_name": "Ambari",
    "city_status": 1,
    "sequence": 637,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 257
}, {
    "city_id": 697,
    "city_name": "Ambottola",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Ambottola",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-25 21:18:27",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 51
}, {
    "city_id": 200,
    "city_name": "Amirabad ",
    "city_status": 1,
    "sequence": 152,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 200
}, {
    "city_id": 132,
    "city_name": "Amowa",
    "city_status": 1,
    "sequence": 99,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 132
}, {
    "city_id": 750,
    "city_name": "Amragachia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Amragachia",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-01-31 17:20:35",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 148
}, {
    "city_id": 163,
    "city_name": "Amtali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 163
}, {
    "city_id": 149,
    "city_name": "Amtoli",
    "city_status": 1,
    "sequence": 116,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 149
}, {
    "city_id": 623,
    "city_name": "Aricha Ghat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Aricha Ghat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 623
}, {
    "city_id": 230,
    "city_name": "Arpara",
    "city_status": 1,
    "sequence": 812,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 230
}, {
    "city_id": 373,
    "city_name": "Ashampara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 373
}, {
    "city_id": 178,
    "city_name": "Ashuganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 178
}, {
    "city_id": 63,
    "city_name": "Ataikhula",
    "city_status": 1,
    "sequence": 63,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 63
}, {
    "city_id": 754,
    "city_name": "Atharomile",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Atharomile",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-02-06 00:22:18",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 754
}, {
    "city_id": 443,
    "city_name": "Atwari",
    "city_status": 1,
    "sequence": 4404,
    "city_short_name": "Atwari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 443
}, {
    "city_id": 333,
    "city_name": "Aushkandi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 333
}, {
    "city_id": 346,
    "city_name": "Awria",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 346
}, {
    "city_id": 462,
    "city_name": "Aziz Nagar\/Harbang",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Aziz Nagar",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 462
}, {
    "city_id": 737,
    "city_name": "Babuchar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Babuchar",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:24:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 737
}, {
    "city_id": 266,
    "city_name": "Babur Hat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 266
}, {
    "city_id": 446,
    "city_name": "Badalgasi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Badalgasi",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 446
}, {
    "city_id": 523,
    "city_name": "Badarganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "B",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 523
}, {
    "city_id": 298,
    "city_name": "Bagachra",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 298
}, {
    "city_id": 738,
    "city_name": "Bagaihat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bagaihat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:25:11",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 738
}, {
    "city_id": 229,
    "city_name": "Bagerhat",
    "city_status": 1,
    "sequence": 724,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 229
}, {
    "city_id": 74,
    "city_name": "Bagha",
    "city_status": 1,
    "sequence": 74,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 74
}, {
    "city_id": 761,
    "city_name": "Baghabari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Baghabari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-03-23 00:51:19",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 761
}, {
    "city_id": 173,
    "city_name": "Baghra",
    "city_status": 1,
    "sequence": 135,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 173
}, {
    "city_id": 370,
    "city_name": "Bahubal",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 370
}, {
    "city_id": 273,
    "city_name": "Baitul Izzat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 69
}, {
    "city_id": 126,
    "city_name": "Bakerganj",
    "city_status": 1,
    "sequence": 93,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 126
}, {
    "city_id": 716,
    "city_name": "Bakhorganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bakhorganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-09-11 17:10:43",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 229
}, {
    "city_id": 424,
    "city_name": "Baliadangi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "BLD",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 424
}, {
    "city_id": 626,
    "city_name": "Baliagotti",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "B",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-02-12 19:12:13",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": null
}, {
    "city_id": 134,
    "city_name": "Banaripara",
    "city_status": 1,
    "sequence": 101,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 134
}, {
    "city_id": 69,
    "city_name": "Bandarban",
    "city_status": 1,
    "sequence": 69,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Located in the Chittagong District of Bangladesh, Bandarban is one of the most famous tourist destinations of the country - loved by trekkers, hikers and adventure lovers alike. Keokradong and Tajingdong of Bandarban, are two of the highest peaks in Bangladesh. Other famous places in Bandarban include: Boga Lake, Ruma, Thanchi, etc. With the beautiful landscape and amazing waterfalls, Bandarban attracts a huge number of tourists throughout the year.",
    "parent_id": 69
}, {
    "city_id": 629,
    "city_name": "Banglabandha",
    "city_status": 1,
    "sequence": 1,
    "city_short_name": "Banglabandha",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-01-20 16:32:46",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 629
}, {
    "city_id": 405,
    "city_name": "Baniachong",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "BNCG",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 405
}, {
    "city_id": 708,
    "city_name": "Banshkhali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Banshkhali",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-28 16:08:24",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 708
}, {
    "city_id": 599,
    "city_name": "Baraigram",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "B",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 81
}, {
    "city_id": 613,
    "city_name": "Barasat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Barasat",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 81
}, {
    "city_id": 130,
    "city_name": "Barguna",
    "city_status": 1,
    "sequence": 97,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 130
}, {
    "city_id": 121,
    "city_name": "Barisal",
    "city_status": 1,
    "sequence": 88,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "null",
    "parent_id": 121
}, {
    "city_id": 467,
    "city_name": "Barisal (Hizla)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Hizla",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 121
}, {
    "city_id": 468,
    "city_name": "Barisal (Muladi)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Muladi",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 121
}, {
    "city_id": 466,
    "city_name": "Barisal (Paisar Hat)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Paisar Hat",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 121
}, {
    "city_id": 470,
    "city_name": "Barisal (Rahmatpur)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Rahmatpur",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 121
}, {
    "city_id": 278,
    "city_name": "Bariyar Hat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 278
}, {
    "city_id": 700,
    "city_name": "Barobazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Barobazar",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-25 21:22:36",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 51
}, {
    "city_id": 277,
    "city_name": "Baruipara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 277
}, {
    "city_id": 318,
    "city_name": "Bashurhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 318
}, {
    "city_id": 153,
    "city_name": "Batajor",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 153
}, {
    "city_id": 369,
    "city_name": "Baura",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Baura",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-08 21:29:19",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 369
}, {
    "city_id": 513,
    "city_name": "Bazalia BGB Camp",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bazalia BGB Camp",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 513
}, {
    "city_id": 289,
    "city_name": "Beanibazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 289
}, {
    "city_id": 739,
    "city_name": "Bekutia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bekutia",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:25:55",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 739
}, {
    "city_id": 82,
    "city_name": "Benapole",
    "city_status": 1,
    "sequence": 82,
    "city_short_name": "BPL",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 82
}, {
    "city_id": 465,
    "city_name": "Benapole (Petrapole Border)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "pb",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 82
}, {
    "city_id": 756,
    "city_name": "Benapole Check Post",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Benapole Check Post",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-02-07 19:15:08",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 756
}, {
    "city_id": 428,
    "city_name": "Beparirhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "B",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 428
}, {
    "city_id": 285,
    "city_name": "Bera",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 285
}, {
    "city_id": 637,
    "city_name": "Betagi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Betagi",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-20 11:44:13",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 637
}, {
    "city_id": 579,
    "city_name": "Bhabaniganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bhabaniganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 579
}, {
    "city_id": 224,
    "city_name": "Bhaduria",
    "city_status": 1,
    "sequence": 842,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 224
}, {
    "city_id": 243,
    "city_name": "Bhairab",
    "city_status": 1,
    "sequence": 818,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 243
}, {
    "city_id": 380,
    "city_name": "Bhaluka",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 75
}, {
    "city_id": 124,
    "city_name": "Bhandaria",
    "city_status": 1,
    "sequence": 91,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 124
}, {
    "city_id": 603,
    "city_name": "Bhandarpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bhandarpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 603
}, {
    "city_id": 354,
    "city_name": "Bhanga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 354
}, {
    "city_id": 740,
    "city_name": "Bhatapara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bhatapara",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:26:47",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 740
}, {
    "city_id": 311,
    "city_name": "Bhatiary",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 311
}, {
    "city_id": 445,
    "city_name": "Bhawlaganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bhawlaganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 445
}, {
    "city_id": 444,
    "city_name": "Bhawlaganj1",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bhawlaganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 444
}, {
    "city_id": 239,
    "city_name": "Bheramara",
    "city_status": 1,
    "sequence": 772,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 239
}, {
    "city_id": 313,
    "city_name": "Bhola",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 313
}, {
    "city_id": 586,
    "city_name": "Bhotemari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bh",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 586
}, {
    "city_id": 32,
    "city_name": "Bhully",
    "city_status": 1,
    "sequence": 32,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 32
}, {
    "city_id": 17,
    "city_name": "Bhurungamari",
    "city_status": 1,
    "sequence": 17,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 17
}, {
    "city_id": 5,
    "city_name": "Birampur",
    "city_status": 1,
    "sequence": 5,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 5
}, {
    "city_id": 31,
    "city_name": "Birgonj",
    "city_status": 1,
    "sequence": 31,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 31
}, {
    "city_id": 376,
    "city_name": "Bishwa Road (Brahmanbaria)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 264
}, {
    "city_id": 219,
    "city_name": "Bisoykhali",
    "city_status": 1,
    "sequence": 705,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 219
}, {
    "city_id": 597,
    "city_name": "Bittipara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "B",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 597
}, {
    "city_id": 596,
    "city_name": "Boalmari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "B",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 596
}, {
    "city_id": 368,
    "city_name": "Boardmari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 368
}, {
    "city_id": 30,
    "city_name": "Boda",
    "city_status": 1,
    "sequence": 30,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 30
}, {
    "city_id": 50,
    "city_name": "Bodorgong",
    "city_status": 1,
    "sequence": 50,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 50
}, {
    "city_id": 741,
    "city_name": "Bogachari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bogachari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:28:13",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 741
}, {
    "city_id": 10,
    "city_name": "Bogura",
    "city_status": 1,
    "sequence": 10,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-28 23:55:18",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Bogura District is located in the Rajshahi Division of Bangladesh. This place is also known as the hub of northern Bangladesh, and hosts International Cricket matches in Shaheed Chandu Stadium. Bogura's yogurt is famous countrywide, and Visa Bohar, Sherpur Kherua Mosque, Korotoa River are some of its most visited places.",
    "parent_id": 10
}, {
    "city_id": 618,
    "city_name": "Bogura(Sherpur)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bogura(Sherpur)",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-12-28 23:54:26",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 10
}, {
    "city_id": 73,
    "city_name": "Bonpara",
    "city_status": 1,
    "sequence": 73,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 73
}, {
    "city_id": 619,
    "city_name": "Borguna",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Borguna",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 619
}, {
    "city_id": 628,
    "city_name": "Boro Bari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Boro Bari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-02-23 16:28:48",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 628
}, {
    "city_id": 607,
    "city_name": "Boro Khochabari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Boro Khochabari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 607
}, {
    "city_id": 763,
    "city_name": "Borobaria",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Borobaria",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-04-09 11:16:21",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 763
}, {
    "city_id": 323,
    "city_name": "Borobaria Bazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 323
}, {
    "city_id": 427,
    "city_name": "Borodaroga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "B",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 427
}, {
    "city_id": 686,
    "city_name": "Borokhata",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Borokhata",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-07 21:19:17",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 40
}, {
    "city_id": 414,
    "city_name": "Borotakia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "BRTKA",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 414
}, {
    "city_id": 683,
    "city_name": "Borovita",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Borovita",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-06 12:40:08",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 683
}, {
    "city_id": 232,
    "city_name": "Bosundia",
    "city_status": 1,
    "sequence": 814,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 232
}, {
    "city_id": 351,
    "city_name": "Botmari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 351
}, {
    "city_id": 729,
    "city_name": "Bottoli",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Bottoli",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-11-28 19:47:43",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 19
}, {
    "city_id": 264,
    "city_name": "Brahmanbaria",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Located in the Chittagong Division, Brahmanbaria\/Bbaria is in the east-central part of Bangladesh. Brahmanbaria used to be famous for producing quality cloth Muslin during the Mughal era. Anderson Memorial, Arphail Sagardighi Mosque, Arphannesa Mosque, Bhadurghar Shahi Mosque, Basudeva Statue, Brahmanbaria Archives and Museum, Buddhist Viharas are some of the famous tourist attraction sites here.",
    "parent_id": 264
}, {
    "city_id": 43,
    "city_name": "Burimari",
    "city_status": 1,
    "sequence": 43,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 43
}, {
    "city_id": 765,
    "city_name": "Chairman Ghat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Chairman Ghat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-05-12 13:36:46",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 765
}, {
    "city_id": 203,
    "city_name": "Chakaria",
    "city_status": 1,
    "sequence": 155,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 203
}, {
    "city_id": 95,
    "city_name": "Chandaikona",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 95
}, {
    "city_id": 543,
    "city_name": "Chandipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "c",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 543
}, {
    "city_id": 127,
    "city_name": "Chandokhali",
    "city_status": 1,
    "sequence": 94,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 127
}, {
    "city_id": 589,
    "city_name": "Chandpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "c",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 589
}, {
    "city_id": 730,
    "city_name": "Chandra",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Chandra",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-03 17:36:36",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 730
}, {
    "city_id": 310,
    "city_name": "Chandradighalia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 310
}, {
    "city_id": 113,
    "city_name": "Chapai Nawabganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Under Rajshahi Division, Chapai Nawabganj is located in the western border of Bangladesh. Chapai Nawabganj mangoes are famous throughout the country along with jackfruit, watermelon, and lychee. Choto Sona Mosque, kanchat Rajbari, Shibmondir, Royal Palace, Naoda Stupa are some of the notable tourist spots here.",
    "parent_id": 113
}, {
    "city_id": 317,
    "city_name": "Chaprashir Hat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 317
}, {
    "city_id": 724,
    "city_name": "Charavita Bazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Charavita Bazar",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-10-26 18:47:45",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 724
}, {
    "city_id": 390,
    "city_name": "Chatkhil (Noakhali)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-24 13:41:43",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 390
}, {
    "city_id": 429,
    "city_name": "Chatmohar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "CHM",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 429
}, {
    "city_id": 287,
    "city_name": "Chatok",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 287
}, {
    "city_id": 252,
    "city_name": "Chauddagram",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 252
}, {
    "city_id": 397,
    "city_name": "Chhagalnaiya",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "CGNY",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 397
}, {
    "city_id": 21,
    "city_name": "Chilahati",
    "city_status": 1,
    "sequence": 21,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 21
}, {
    "city_id": 15,
    "city_name": "Chilmari",
    "city_status": 1,
    "sequence": 15,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 15
}, {
    "city_id": 251,
    "city_name": "Chiora Bazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 251
}, {
    "city_id": 48,
    "city_name": "Chirirbandar",
    "city_status": 1,
    "sequence": 48,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 48
}, {
    "city_id": 309,
    "city_name": "Chitalmari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 309
}, {
    "city_id": 47,
    "city_name": "Chittagong",
    "city_status": 1,
    "sequence": 47,
    "city_short_name": "CTG",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Located in the south-eastern part of Bangladesh, Chittagong is a major port city, and the second largest city after Dhaka. It is also considered as one of the oldest and significant trading city with many important companies setting up their operation here. Some famous attraction sites in Chittagong are: Foy's Lake, War Cemetery D.C. Hill, The Batali Hill, Patenga Sea Beach, Naval Point, and many more. Chittagong division is also considered to be the hub of tourist attractions in Bangladesh - hosting the largest sea beach in the world in Cox\u2019s Bazar, natural beauty of Bandarban, Tefnaf, Sajek and Saintmartin.",
    "parent_id": 47
}, {
    "city_id": 692,
    "city_name": "Chittagong University",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Chittagong University",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-24 18:22:27",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 692
}, {
    "city_id": 672,
    "city_name": "Chorar Hat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Chorar Hat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-10-16 10:20:01",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 672
}, {
    "city_id": 157,
    "city_name": "Chorkhali",
    "city_status": 1,
    "sequence": 121,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 157
}, {
    "city_id": 449,
    "city_name": "Chowdala",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "CHDL",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 449
}, {
    "city_id": 564,
    "city_name": "Chowgacha",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Chowgacha",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 564
}, {
    "city_id": 321,
    "city_name": "Chowmuhani",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 321
}, {
    "city_id": 326,
    "city_name": "Chowthaimahal",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 326
}, {
    "city_id": 515,
    "city_name": "Chuadanga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "c",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 515
}, {
    "city_id": 486,
    "city_name": "Chuknagar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "c",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 486
}, {
    "city_id": 698,
    "city_name": "Churamonkathi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Churamonkathi",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-25 21:20:32",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 51
}, {
    "city_id": 695,
    "city_name": "Chutipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Chutipur ",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-25 21:11:20",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 51
}, {
    "city_id": 677,
    "city_name": "Companiganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Companiganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-11-29 15:00:18",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 677
}, {
    "city_id": 275,
    "city_name": "Court Kachari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 275
}, {
    "city_id": 138,
    "city_name": "Cowkhali",
    "city_status": 1,
    "sequence": 105,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 263
}, {
    "city_id": 175,
    "city_name": "Cox's Bazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "COX",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Cox's Bazar is home to the largest sandy sea beach in the world, and is located in the southern-most part of Chittagong. It is also known as the tourist capital of Bangladesh, attracting millions of tourists every year - both local and foreign. As a result, this place has seen huge development in infrastructure and hospitality industry over the years. Some of its famous attraction sites include: Aggmeda Khyang Monastery, Inani Beach, Bongobondhu Safari Park, Laboni Beach, Himchari, Radiant Fish World, and many more!",
    "parent_id": 175
}, {
    "city_id": 209,
    "city_name": "Cumilla",
    "city_status": 1,
    "sequence": 161,
    "city_short_name": "Cumilla",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-28 23:53:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 209
}, {
    "city_id": 478,
    "city_name": "Cumilla (Chiora)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "C",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-12-28 23:53:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 209
}, {
    "city_id": 476,
    "city_name": "Cumilla (Mohammed Ali Bazar)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "M",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-12-28 23:53:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 209
}, {
    "city_id": 479,
    "city_name": "Cumilla (Podia)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "P",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-12-28 23:53:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 209
}, {
    "city_id": 480,
    "city_name": "Cumilla (Podua)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "P",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-12-28 23:53:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 209
}, {
    "city_id": 353,
    "city_name": "Cumilla Cantonment",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-12-28 23:53:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 209
}, {
    "city_id": 236,
    "city_name": "Cupnagar",
    "city_status": 1,
    "sequence": 817,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 236
}, {
    "city_id": 327,
    "city_name": "Daganbhuiyan",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 327
}, {
    "city_id": 27,
    "city_name": "Dalia",
    "city_status": 1,
    "sequence": 27,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 27
}, {
    "city_id": 78,
    "city_name": "Damurhat",
    "city_status": 1,
    "sequence": 78,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 78
}, {
    "city_id": 57,
    "city_name": "Darshana",
    "city_status": 1,
    "sequence": 57,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Darshana is a small industrial township at the south-west region of Khulna division in Bangladesh. It is situated at Damurhuda Upazila in the Chuadanga District. Carew & Company Bangladesh Ltd situated in Darshana, is the biggest sugar mill in Bangladesh. Darshana is the municipal corporation in Bangladesh under the sub-districts level in Bangladesh. Darshana is one of Bangladesh's top municipal corporations after Bangladesh's sub-district level. There are four libraries, one college, four high schools and eleven primary schools. ",
    "parent_id": 57
}, {
    "city_id": 580,
    "city_name": "Dashuria",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "D",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 580
}, {
    "city_id": 712,
    "city_name": "Daulatdia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Daulatdia",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-03-25 16:28:24",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 184
}, {
    "city_id": 362,
    "city_name": "Daulatpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 362
}, {
    "city_id": 22,
    "city_name": "Debiganj",
    "city_status": 1,
    "sequence": 22,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 22
}, {
    "city_id": 145,
    "city_name": "Deowatola",
    "city_status": 1,
    "sequence": 112,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 145
}, {
    "city_id": 678,
    "city_name": "Depara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Depara",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-05 18:20:17",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 229
}, {
    "city_id": 651,
    "city_name": "Derai",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Derai",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-09 18:14:32",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 651
}, {
    "city_id": 642,
    "city_name": "Deuatala",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Deuatala",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-28 07:51:58",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 642
}, {
    "city_id": 1,
    "city_name": "Dhaka",
    "city_status": 1,
    "sequence": 1,
    "city_short_name": "DHK",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Dhaka is the capital and the largest city of Bangladesh, holding up to 180 million residents. With headquarters of all the major local and multinational companies, Dhaka city is the hub of all trade and commerce for the country. Major Commercial Areas of Dhaka are Motijheel, Dhanmondi, Gulshan, Banani, Uttara and Karwan Bazar. Over the years, the city has seen a lot of growing middle class families meaning higher consumer spending. Thus, the demand for leisure has increased as well!",
    "parent_id": 1
}, {
    "city_id": 474,
    "city_name": "Dhaka (Abdullahpur)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "DHKA",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-21 19:23:55",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 551,
    "city_name": "Dhaka (Baipal)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "B",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-21 19:25:51",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 453
}, {
    "city_id": 452,
    "city_name": "Dhaka (Chandra)",
    "city_status": 1,
    "sequence": 1,
    "city_short_name": "Chandra",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 452
}, {
    "city_id": 456,
    "city_name": "Dhaka (Gabtoli)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Gabtoli",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-21 19:23:55",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 472,
    "city_name": "Dhaka (Gulistan)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "DHKG",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-21 19:23:55",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 649,
    "city_name": "Dhaka (Hatubhanga)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Dhaka (Hatubhanga)",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-09-09 15:06:13",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 562,
    "city_name": "Dhaka (Kanchpur)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "DK",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-21 19:23:55",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 664,
    "city_name": "Dhaka (Keraniganj)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Dhaka (Keraniganj)",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-10-15 15:11:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 484,
    "city_name": "Dhaka (Mirpur)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "M",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-21 19:23:56",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 265,
    "city_name": "Dhaka (Mohakhali)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": null,
    "parent_id": 1
}, {
    "city_id": 454,
    "city_name": "Dhaka (Nabinagar)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Nabinagar",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-19 11:22:34",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 454
}, {
    "city_id": 647,
    "city_name": "Dhaka (Postogola)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Dhaka (Postogola)",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-09-09 15:06:13",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 455,
    "city_name": "Dhaka (Savar)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Savar",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-21 19:45:42",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 190
}, {
    "city_id": 457,
    "city_name": "Dhaka (Saydabad)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Saydabad",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-21 19:23:56",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 488,
    "city_name": "Dhaka (Titipara)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "DHKT",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-10-04 15:16:14",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 669,
    "city_name": "Dhaka (Zirani)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Dhaka (Zirani)",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-10-15 15:11:50",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 611,
    "city_name": "Dhaka(Fakirapool)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Fakirapool",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-01-21 19:23:57",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 292,
    "city_name": "Dhamoirhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 292
}, {
    "city_id": 516,
    "city_name": "Dhamrai",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "d",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 516
}, {
    "city_id": 482,
    "city_name": "Dhanbari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "DN",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 482
}, {
    "city_id": 624,
    "city_name": "Dhaperhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Dhaperhat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-26 12:54:46",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": null
}, {
    "city_id": 104,
    "city_name": "Dholvanga ",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 104
}, {
    "city_id": 101,
    "city_name": "Dhupchanchia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 101
}, {
    "city_id": 213,
    "city_name": "Dighinala",
    "city_status": 1,
    "sequence": 164,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 213
}, {
    "city_id": 25,
    "city_name": "Dimla",
    "city_status": 1,
    "sequence": 25,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 25
}, {
    "city_id": 2,
    "city_name": "Dinajpur",
    "city_status": 1,
    "sequence": 2,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Dinajpur is located in the northern side of Bangladesh under Rangpur division. Although Dinajpur is a small town, the roads are well developed and maintained regularly. Dinajpur is well known for their lychees and Kataribhogh Rice, and has famous tourist attraction sites such as: Paharpur, Shopnopuri Theme Park, Ramsagar Lake, and Dinajpur Raj Palace.",
    "parent_id": 2
}, {
    "city_id": 550,
    "city_name": "Dinajpur (Biral)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "b",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 2
}, {
    "city_id": 199,
    "city_name": "Dohazari",
    "city_status": 1,
    "sequence": 151,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 199
}, {
    "city_id": 20,
    "city_name": "Domar",
    "city_status": 1,
    "sequence": 20,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 20
}, {
    "city_id": 587,
    "city_name": "Doshmile",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Doshmile",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-05 13:30:17",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 587
}, {
    "city_id": 196,
    "city_name": "Doshmile (H)",
    "city_status": 1,
    "sequence": 148,
    "city_short_name": "DM",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2021-12-05 13:25:04",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 587
}, {
    "city_id": 742,
    "city_name": "Dream House Hotel",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Dream House Hotel",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:32:18",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 742
}, {
    "city_id": 204,
    "city_name": "Dulhazra",
    "city_status": 1,
    "sequence": 156,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 204
}, {
    "city_id": 755,
    "city_name": "Dumuria ",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Dumuria",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-02-06 00:39:52",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 755
}, {
    "city_id": 461,
    "city_name": "Eidgah\/Patiya",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Eidgah",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 461
}, {
    "city_id": 205,
    "city_name": "Eidgao",
    "city_status": 1,
    "sequence": 157,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 205
}, {
    "city_id": 705,
    "city_name": "Eidgha",
    "city_status": 1,
    "sequence": 13891,
    "city_short_name": "Eidgha",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-19 12:36:48",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 705
}, {
    "city_id": 721,
    "city_name": "Elenga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Elenga",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-10-24 20:34:21",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 34
}, {
    "city_id": 253,
    "city_name": "Enayetpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 253
}, {
    "city_id": 359,
    "city_name": "Fakirhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 359
}, {
    "city_id": 690,
    "city_name": "Faridganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Faridganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-11 20:29:54",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 589
}, {
    "city_id": 184,
    "city_name": "Faridpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 184
}, {
    "city_id": 291,
    "city_name": "Fatickchari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 291
}, {
    "city_id": 258,
    "city_name": "Feni",
    "city_status": 1,
    "sequence": 1999,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Feni is a small district located in the south-eastern part of Bangladesh, under Chittagong division.  The district consists of six sub-districts: Sonagazi, Fulgazi, Parshuram, Daganbhuiyan, Chhagalnaiya and Feni Sadar. Hatia Island, Sarsadi Masjid, Bijoy Sing lake, Rajazhi Lake are some of the most popular tourist attraction sites here. ",
    "parent_id": 258
}, {
    "city_id": 477,
    "city_name": "Feni (Mohammed Ali Bazar)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "F",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 258
}, {
    "city_id": 667,
    "city_name": "Feni (Mohipal)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Feni (Mohipal)",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-10-05 13:12:33",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 258
}, {
    "city_id": 493,
    "city_name": "Feni (Terminal)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "FT",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 258
}, {
    "city_id": 302,
    "city_name": "Food Village",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 302
}, {
    "city_id": 571,
    "city_name": "Foyla",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Foyla",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 571
}, {
    "city_id": 4,
    "city_name": "Fulbari",
    "city_status": 1,
    "sequence": 4,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 4
}, {
    "city_id": 363,
    "city_name": "Fulbari Gate",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 363
}, {
    "city_id": 512,
    "city_name": "Gachbaria",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Gachbaria",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 512
}, {
    "city_id": 105,
    "city_name": "Gaibandha",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Gaibandha district is located in the right bank of Brahmaputra River, the northern part of Bangladesh. There are three municipalities in Gaibandha named Gobindaganj, Sundarganj and Gaibandha. Notable tourist attraction sites include: Pourashava Bhaban, Bashashi Ghat, core of the Capital of King Birot, Pirer Hat Mazar, Kantagir Temple, Shrine of Ghager Bazar, Gaibandha Municipality park and Ghaghot River bank.",
    "parent_id": 105
}, {
    "city_id": 655,
    "city_name": "Galachipa",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Galachipa",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-12 11:17:56",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 655
}, {
    "city_id": 301,
    "city_name": "Gangni",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 301
}, {
    "city_id": 521,
    "city_name": "Garagonj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "g",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 521
}, {
    "city_id": 679,
    "city_name": "Garagram",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Garagram",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-06 12:15:38",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 679
}, {
    "city_id": 274,
    "city_name": "Gasbaria",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 274
}, {
    "city_id": 382,
    "city_name": "Gauchia (Narayanganj)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 382
}, {
    "city_id": 133,
    "city_name": "Gaurochitra",
    "city_status": 1,
    "sequence": 100,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 133
}, {
    "city_id": 129,
    "city_name": "Gaurochonna",
    "city_status": 1,
    "sequence": 96,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 129
}, {
    "city_id": 142,
    "city_name": "Gauronodi",
    "city_status": 1,
    "sequence": 109,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 142
}, {
    "city_id": 182,
    "city_name": "Gazipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 182
}, {
    "city_id": 555,
    "city_name": "Gazipur (Chandra)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "GC",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 182
}, {
    "city_id": 491,
    "city_name": "Gazipur (Cherag Ali)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "gg",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-12-06 20:08:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 182
}, {
    "city_id": 556,
    "city_name": "Gazipur (Konabari)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "GK",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 182
}, {
    "city_id": 557,
    "city_name": "Gazipur (Shib Bari)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "GSB",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 182
}, {
    "city_id": 719,
    "city_name": "Gazirhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Gazirhat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-10-06 15:26:54",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 719
}, {
    "city_id": 594,
    "city_name": "Ghonapara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "G",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 268
}, {
    "city_id": 195,
    "city_name": "Ghoraghat",
    "city_status": 1,
    "sequence": 147,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 195
}, {
    "city_id": 396,
    "city_name": "Ghorashal",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "GRSL",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 396
}, {
    "city_id": 334,
    "city_name": "Goala Bazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 334
}, {
    "city_id": 570,
    "city_name": "Goalanda",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Goalanda",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 570
}, {
    "city_id": 88,
    "city_name": "Gobindaganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 88
}, {
    "city_id": 464,
    "city_name": "Gobindaganj (Chatok)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "GB.",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 464
}, {
    "city_id": 530,
    "city_name": "Gobindaganj (Sunamganj)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "g.",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 530
}, {
    "city_id": 743,
    "city_name": "Godagari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Godagari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:32:59",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 743
}, {
    "city_id": 671,
    "city_name": "Gomnati",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Gomnati",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-10-15 12:51:21",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 671
}, {
    "city_id": 268,
    "city_name": "Gopalganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Gopalganj district is located in the south-central part of Bangladesh, under Dhaka division. The district has a rich historical heritage, and was named after Naba Gopal, the grandson of Rashmoni of Khatra landlord. The graveyard of Bangabandhu Sheikh Mujibur Rahaman, and St. Mathuranath is also located here. Some notable tourist attraction sites include: Kotali Fort, Orakandi Thagure Bari of Kashiani, Joy Bangla Pond of Gopalganj Sadar, Barni Baor of Gopalganj Sadar, Baganbari of Tungipara (Birds Sanctuary), the parental homestead of poet Sukanta in Kotalipara, Kort Mosque, Chander Bil, Khaner Par Lake, Lal Saplar Bil of Kotalipara, Upalpur Landlord House (currently Tafsil office), home of poet Sukanta Vattacharja, Bahutali Mosque, Uzanir Landlord Palace, etc.",
    "parent_id": 268
}, {
    "city_id": 759,
    "city_name": "Gorgoria Masterbari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Gorgoria Masterbari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-03-08 13:40:59",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 759
}, {
    "city_id": 404,
    "city_name": "Gournadi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Gournadi",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 404
}, {
    "city_id": 216,
    "city_name": "Guachitra",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 216
}, {
    "city_id": 329,
    "city_name": "Habiganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 329
}, {
    "city_id": 733,
    "city_name": "Haripur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Haripur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:14:34",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 733
}, {
    "city_id": 221,
    "city_name": "Hasada",
    "city_status": 1,
    "sequence": 707,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 221
}, {
    "city_id": 593,
    "city_name": "Hatboalia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "H",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 593
}, {
    "city_id": 210,
    "city_name": "Hathazari",
    "city_status": 1,
    "sequence": 162,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 47
}, {
    "city_id": 41,
    "city_name": "Hatibandha",
    "city_status": 1,
    "sequence": 41,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 41
}, {
    "city_id": 591,
    "city_name": "Haziganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "H",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 591
}, {
    "city_id": 661,
    "city_name": "Hazipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Hazipur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-12 14:20:15",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 661
}, {
    "city_id": 80,
    "city_name": "Hili",
    "city_status": 1,
    "sequence": 80,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Hili land port is located in Dinajpur district and is the second largest land port in Bangladesh. The Hili customs station port is responsible for all the export-import between India and Bangladesh.",
    "parent_id": 80
}, {
    "city_id": 617,
    "city_name": "Hotel",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "H",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 617
}, {
    "city_id": 507,
    "city_name": "Hotel Highway Inn",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "H",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 507
}, {
    "city_id": 511,
    "city_name": "Hotel Irish",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "i",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 511
}, {
    "city_id": 565,
    "city_name": "Hotel Jamjam ",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "HJ",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 565
}, {
    "city_id": 508,
    "city_name": "Hotel Rajmoni",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "R",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-03-02 11:54:20",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 508
}, {
    "city_id": 158,
    "city_name": "Ikry",
    "city_status": 1,
    "sequence": 122,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 158
}, {
    "city_id": 72,
    "city_name": "Ishwardi",
    "city_status": 1,
    "sequence": 72,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 72
}, {
    "city_id": 155,
    "city_name": "Isladi",
    "city_status": 1,
    "sequence": 120,
    "city_short_name": "Isladi",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 155
}, {
    "city_id": 706,
    "city_name": "Jaflong",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Jaflong",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-24 19:42:36",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 83
}, {
    "city_id": 426,
    "city_name": "Jaigirhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "JGR",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 7
}, {
    "city_id": 546,
    "city_name": "Jaldhaka",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "j",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 546
}, {
    "city_id": 744,
    "city_name": "Jaliapara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Jaliapara",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:34:45",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 744
}, {
    "city_id": 604,
    "city_name": "Jamalganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Jamalganj",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 601
}, {
    "city_id": 601,
    "city_name": "Jamalgonj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "J",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 601
}, {
    "city_id": 722,
    "city_name": "Jamalpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Jamalpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-10-24 20:36:29",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 722
}, {
    "city_id": 51,
    "city_name": "Jessore",
    "city_status": 1,
    "sequence": 51,
    "city_short_name": "JSR",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Jessore, the 13th largest district, is located in the south-western borderline of Bangladesh. Some of the famous tourist places in Jessore include: Sagordari, Graveyard of Gazi Kalu Champaboti, Tetulia Mosque, Graveyard of Bulu Dewan, Imam Bari, Parental House of Dhiraj Vattyacharja, Benapol Border Gate, Chachra Royal Palace and Shib Mondir, Residence of Michal Madhusudan Datta, Varat Vayner Dewary, Balia Vakutia Village (famous for its small weaving industry), Baliadanga Temple, etc. ",
    "parent_id": 51
}, {
    "city_id": 122,
    "city_name": "Jhalokati",
    "city_status": 1,
    "sequence": 89,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 122
}, {
    "city_id": 575,
    "city_name": "Jharbari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Jharbari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 575
}, {
    "city_id": 170,
    "city_name": "Jhekorgasa",
    "city_status": 1,
    "sequence": 127,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 227
}, {
    "city_id": 52,
    "city_name": "Jhenaidah",
    "city_status": 1,
    "sequence": 52,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Jhenaidah district is the gateway of the southern part of Bangladesh, under Khulna Division. There are six municipalities in Jhenaidah, namely Jhenaidah, Mohespur, Court-Chandpur, Shyalkupa and Kaligonj. Some notable tourist attraction sites are: Mobarokgonj Sugar mills, Jhenaidah Cadet College, Datanagor Agricultural Project, Shyalakupa Sahi Mosque, Shrine of Pagla Kanai, Naldanga Temple Complex, Kolika Doha, Baro Bazar, Mazar of Bulu Deouan, Gunjanath temple, Shiddeshary Kali Mondir, Home of K P Bose, Dhol Samudra Lake, Home of Poet Golam Mostafa, Shailkupa Ramgopal Temple, and many more!",
    "parent_id": 52
}, {
    "city_id": 227,
    "city_name": "Jhikargacha",
    "city_status": 1,
    "sequence": 820,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 227
}, {
    "city_id": 24,
    "city_name": "Joldhaka",
    "city_status": 1,
    "sequence": 24,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-08-31 10:44:12",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 546
}, {
    "city_id": 322,
    "city_name": "Jomidar Hat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 322
}, {
    "city_id": 635,
    "city_name": "Joydihi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "J",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-09 15:23:38",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 635
}, {
    "city_id": 193,
    "city_name": "Joyoshri",
    "city_status": 1,
    "sequence": 145,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 183
}, {
    "city_id": 573,
    "city_name": "Joypasha",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Joypasha",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 573
}, {
    "city_id": 76,
    "city_name": "Joypurhat",
    "city_status": 1,
    "sequence": 76,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Joypurhat is a district in the northern part of Bangladesh, under Rajshahi Division. It is called the store-house of food of Bangldesh, is famous for production of all the agricultural products. The economy of Joypurhat is mainly based on seasonal crops & fruits like Rice, Potato, Wheat, Onions, Mango, Jackfruits, Banana etc. A huge amount of sugarcane is also produced here as well; and it holds the country's largest sugar mill. There are also other industries like Rice mill & Poultry farm in this district. It exports about all kinds of agricultural products every day. Since Hili land port is very close to Joypurhat district, many people from this district do export-import business through this port and almost all the vehicles of this port runs through this district. This district is a very important business zone. Some places of interest in Joypurhat are: Bell Amla Bar Shivalaya (Shiva Temple), Pagla Dewan killing ground, Patharghata Church, Lakma Rajbari, Bhimer Punti, Duyani Ghat, Gopinathpur Temple, Hinda-Kasba Shahi Mosque, Nimai Pir's Shrine, Asranga Dighi, Nandail Dighi, Children's Park, Bastabpuri, etc.",
    "parent_id": 76
}, {
    "city_id": 183,
    "city_name": "Joyshree",
    "city_status": 1,
    "sequence": 869,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 183
}, {
    "city_id": 338,
    "city_name": "Jushkhola",
    "city_status": 1,
    "sequence": 4402,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 338
}, {
    "city_id": 598,
    "city_name": "Kachikata",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "K",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 598
}, {
    "city_id": 383,
    "city_name": "Kachpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 383
}, {
    "city_id": 659,
    "city_name": "Kachupatra",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kachupatra",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-13 10:32:02",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 659
}, {
    "city_id": 425,
    "city_name": "Kadambari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "KDM",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 425
}, {
    "city_id": 337,
    "city_name": "Kadamtala",
    "city_status": 1,
    "sequence": 4401,
    "city_short_name": "Kadamtala",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 337
}, {
    "city_id": 547,
    "city_name": "Kaharole",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kaharole",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 547
}, {
    "city_id": 146,
    "city_name": "Kakchira",
    "city_status": 1,
    "sequence": 113,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 146
}, {
    "city_id": 367,
    "city_name": "Kakinia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 367
}, {
    "city_id": 93,
    "city_name": "kalai",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 93
}, {
    "city_id": 401,
    "city_name": "Kalapara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kalapara",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 401
}, {
    "city_id": 297,
    "city_name": "Kalaroa",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 297
}, {
    "city_id": 168,
    "city_name": "Kalarowa",
    "city_status": 1,
    "sequence": 127,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 297
}, {
    "city_id": 407,
    "city_name": "Kalia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "KLA",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 407
}, {
    "city_id": 409,
    "city_name": "Kalia.",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "KLA",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 407
}, {
    "city_id": 574,
    "city_name": "Kalibari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kalibari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 574
}, {
    "city_id": 166,
    "city_name": "Kaliganj",
    "city_status": 1,
    "sequence": 127,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 166
}, {
    "city_id": 541,
    "city_name": "Kaliganj (Jhenaidah)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "kj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 541
}, {
    "city_id": 578,
    "city_name": "Kaliganj(NB)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kaliganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 578
}, {
    "city_id": 53,
    "city_name": "Kaligong",
    "city_status": 1,
    "sequence": 53,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 53
}, {
    "city_id": 727,
    "city_name": "Kalmakanda",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kalmakanda",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-11-28 16:55:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 485
}, {
    "city_id": 293,
    "city_name": "Kalna",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 293
}, {
    "city_id": 645,
    "city_name": "Kamarhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kamarhat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-28 07:53:03",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 645
}, {
    "city_id": 406,
    "city_name": "Kamarpara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "KMR",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 7
}, {
    "city_id": 316,
    "city_name": "Kankirhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 316
}, {
    "city_id": 114,
    "city_name": "Kansat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 114
}, {
    "city_id": 223,
    "city_name": "Kapasdanga",
    "city_status": 1,
    "sequence": 709,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 223
}, {
    "city_id": 615,
    "city_name": "Kapilmuni",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "K",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 615
}, {
    "city_id": 212,
    "city_name": "Kaptai",
    "city_status": 1,
    "sequence": 1,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 212
}, {
    "city_id": 703,
    "city_name": "Karnaphuli",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Karnaphuli",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-09 19:01:46",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 47
}, {
    "city_id": 58,
    "city_name": "Karpashdanga",
    "city_status": 1,
    "sequence": 58,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 58
}, {
    "city_id": 568,
    "city_name": "Kashiani",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kashiani",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 568
}, {
    "city_id": 356,
    "city_name": "Kashinathpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 356
}, {
    "city_id": 62,
    "city_name": "Kashinatpur",
    "city_status": 1,
    "sequence": 62,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 356
}, {
    "city_id": 567,
    "city_name": "Kasiani",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kashiyani",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 568
}, {
    "city_id": 364,
    "city_name": "Katakali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 228
}, {
    "city_id": 228,
    "city_name": "Katakhali",
    "city_status": 1,
    "sequence": 825,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 228
}, {
    "city_id": 646,
    "city_name": "Kathalbari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kathalbari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-08-20 18:07:08",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 646
}, {
    "city_id": 748,
    "city_name": "Kathalbari Ghat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kathalbari Ghat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-01-23 14:53:17",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 646
}, {
    "city_id": 534,
    "city_name": "Kathalbari Ghat (Mawa)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "k",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 534
}, {
    "city_id": 131,
    "city_name": "Kathalia",
    "city_status": 1,
    "sequence": 98,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 131
}, {
    "city_id": 387,
    "city_name": "Kaunia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 387
}, {
    "city_id": 263,
    "city_name": "Kawkhali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 263
}, {
    "city_id": 447,
    "city_name": "Kazipur",
    "city_status": 1,
    "sequence": 4405,
    "city_short_name": "Kazipur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 447
}, {
    "city_id": 202,
    "city_name": "Keranihat ",
    "city_status": 1,
    "sequence": 154,
    "city_short_name": "Khat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 202
}, {
    "city_id": 235,
    "city_name": "Keshabpur",
    "city_status": 1,
    "sequence": 816,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 235
}, {
    "city_id": 753,
    "city_name": "Keyar ",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Keyar ",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-01-31 17:40:13",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 282
}, {
    "city_id": 197,
    "city_name": "Khagrachari",
    "city_status": 1,
    "sequence": 149,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Khagrachari is a district in Chittagong Division, located at south-eastern side of Bangladesh, and is a part of Chittagong Hill Tracts. Khagrachari is one of the most spectacular places in Bangladesh, with innumerable hills, forests, and waterfalls. Notable tourist attraction sites include: Alutila Mysterious Cave, Alutila Tourists spot, Richhang Waterfall, Nunchhori Debota Pond, Dighinala Manikker Dighi, Shajek and Marissa Vally, Yonged Buddha Bihar, Panichari Brihot Buddha sculpture, and many more!",
    "parent_id": 197
}, {
    "city_id": 55,
    "city_name": "Khalishpur",
    "city_status": 1,
    "sequence": 55,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 174
}, {
    "city_id": 709,
    "city_name": "Khanjanpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Khanjanpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-03-08 11:13:24",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 709
}, {
    "city_id": 525,
    "city_name": "Khanshama",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "k",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 525
}, {
    "city_id": 150,
    "city_name": "Khapopara",
    "city_status": 1,
    "sequence": 117,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 162
}, {
    "city_id": 162,
    "city_name": "Khepupara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 162
}, {
    "city_id": 681,
    "city_name": "Kherkhati",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kherkhati",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-06 12:36:48",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 681
}, {
    "city_id": 37,
    "city_name": "Khoksha",
    "city_status": 1,
    "sequence": 37,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 37
}, {
    "city_id": 49,
    "city_name": "Kholahati",
    "city_status": 1,
    "sequence": 49,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 49
}, {
    "city_id": 625,
    "city_name": "Kholifar(Dorja)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "KD",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-29 20:29:16",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": null
}, {
    "city_id": 174,
    "city_name": "Khulna",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Khulna is the third largest city, and is located on the south region of Bangladesh. It is a small and tidy town with less a million residents. However due to its second largest port, Mongla Sea Port, it has some significant industries growing there. It hosts some big Cement, Gas and Fisheries industries near Mongla Sea Port. This city is also a gateway to the largest mangrove forest, Sundarbans.",
    "parent_id": 174
}, {
    "city_id": 473,
    "city_name": "Khulna (Phultala)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "KHLP",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 174
}, {
    "city_id": 757,
    "city_name": "Khulna (Zero Point)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Khulna (Zero Point)",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-02-08 15:20:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 174
}, {
    "city_id": 577,
    "city_name": "Kishoreganj(NB)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kishoreganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 577
}, {
    "city_id": 26,
    "city_name": "Kishorganj",
    "city_status": 1,
    "sequence": 26,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 26
}, {
    "city_id": 94,
    "city_name": "Kodda",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 94
}, {
    "city_id": 358,
    "city_name": "Koitola",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 358
}, {
    "city_id": 81,
    "city_name": "Kolkata",
    "city_status": 1,
    "sequence": 81,
    "city_short_name": "BPLC",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Kolkata is the main commercial financial hub of East and North East India and the second largest city in India. The city has many famous places like: Inox Multiplexes, Nandan, Tantra, Barista Coffee Shops, Sourav's Pavilion and Science City. Tourism being one of the main revenue earner, the city has seen vast development in infrastructure. It is also a major shopping hub for sarees and other traditional outfits in places like Sudder Street, Quest mall, New Market and Boro Bazar. Innumerable street food stations and other famous restaurant chains sre scattered throughout the city.",
    "parent_id": 81
}, {
    "city_id": 347,
    "city_name": "Kona",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 347
}, {
    "city_id": 660,
    "city_name": "Koraibaria",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Koraibaria",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-12 14:06:39",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 660
}, {
    "city_id": 308,
    "city_name": "Kotalipara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kotalipara",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-01 22:42:30",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 308
}, {
    "city_id": 54,
    "city_name": "Kotchandpur",
    "city_status": 1,
    "sequence": 54,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 54
}, {
    "city_id": 328,
    "city_name": "Kotober Hat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 328
}, {
    "city_id": 372,
    "city_name": "Kuakata",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 372
}, {
    "city_id": 222,
    "city_name": "Kudulgachi",
    "city_status": 1,
    "sequence": 708,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 222
}, {
    "city_id": 290,
    "city_name": "Kulaura",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 290
}, {
    "city_id": 39,
    "city_name": "Kumarkhali",
    "city_status": 1,
    "sequence": 39,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 39
}, {
    "city_id": 412,
    "city_name": "Kumira",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kumira",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 412
}, {
    "city_id": 666,
    "city_name": "Kunia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Kunia",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-24 15:49:05",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 666
}, {
    "city_id": 13,
    "city_name": "Kurigram",
    "city_status": 1,
    "sequence": 13,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Kurigram district is located in the northern borderline of Bangladesh, under Rangpur Division. There are three municipalities in Kurigram named Ulipur, Nageshwari and Kurigram. Some of the notable tourist attraction sites include: Shahid Freedom Fighter Monument, Rajarhat Sahi masjid, three domed masjid, Joymoni Palace, Chandamari masjid, Kali Siddheshwari mandir and Chilmari Land Port. Kurigram is also famous for their sweets, especially Chomchom.",
    "parent_id": 13
}, {
    "city_id": 44,
    "city_name": "Kushtia",
    "city_status": 1,
    "sequence": 44,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Kushtia district is situated in the western part of Bangladesh under Khulna Division. The region has an important ancient heritage of traditional culture and history attached to it. There are 5 Municipalities in Kushtia: Kumarkhali, Mirpur, Veramara, Kushtia, and Khoksha. It has many tourist attraction sites like Rabindra Kuthibari of Shelaidaha, the Shrine of Fakir Lalon Shah, Jhaudia Shahi Mosque, Gorai River, Kushtia City Municipality House, Islamic University, etc.",
    "parent_id": 44
}, {
    "city_id": 147,
    "city_name": "Labu Khali",
    "city_status": 1,
    "sequence": 114,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 147
}, {
    "city_id": 608,
    "city_name": "Lahiri",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Lahiri",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 608
}, {
    "city_id": 296,
    "city_name": "Laksam",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 296
}, {
    "city_id": 393,
    "city_name": "Lakshmipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 393
}, {
    "city_id": 40,
    "city_name": "Lalmonirhat",
    "city_status": 1,
    "sequence": 40,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 40
}, {
    "city_id": 510,
    "city_name": "Lama",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Lama",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 510
}, {
    "city_id": 294,
    "city_name": "Laxmipasha",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 294
}, {
    "city_id": 636,
    "city_name": "Lebukhali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Lebukhali",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-20 11:22:38",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 636
}, {
    "city_id": 643,
    "city_name": "Lemua",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Lemua",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-28 07:52:22",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 643
}, {
    "city_id": 201,
    "city_name": "Lohagara",
    "city_status": 1,
    "sequence": 153,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 201
}, {
    "city_id": 545,
    "city_name": "Loskordia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Loskordia",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 545
}, {
    "city_id": 610,
    "city_name": "Machpara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "M",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 610
}, {
    "city_id": 403,
    "city_name": "Madaripur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Madaripur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 403
}, {
    "city_id": 384,
    "city_name": "Madhabdi (Narayanganj)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 384
}, {
    "city_id": 344,
    "city_name": "Madhabpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 344
}, {
    "city_id": 544,
    "city_name": "Madhukhali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Madhukhali",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 544
}, {
    "city_id": 483,
    "city_name": "Madhupur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "M",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 483
}, {
    "city_id": 614,
    "city_name": "Madrasah Ghat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Madrasah Ghat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 614
}, {
    "city_id": 23,
    "city_name": "Magura",
    "city_status": 1,
    "sequence": 23,
    "city_short_name": "MGR",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 23
}, {
    "city_id": 563,
    "city_name": "Magura (R)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "MR",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 23
}, {
    "city_id": 600,
    "city_name": "Mahajan",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mahajan",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 600
}, {
    "city_id": 734,
    "city_name": "Mahalchhari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mahalchhari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:17:34",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 734
}, {
    "city_id": 553,
    "city_name": "Mahasthangarh",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "M",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 10
}, {
    "city_id": 331,
    "city_name": "Maijde",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 331
}, {
    "city_id": 267,
    "city_name": "Mainamati",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 209
}, {
    "city_id": 348,
    "city_name": "Majra",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 348
}, {
    "city_id": 349,
    "city_name": "Maksedpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 349
}, {
    "city_id": 694,
    "city_name": "Manikchari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Manikchari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-24 18:36:46",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 694
}, {
    "city_id": 164,
    "city_name": "Manikganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 164
}, {
    "city_id": 188,
    "city_name": "Manikgonge",
    "city_status": 1,
    "sequence": 139,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 164
}, {
    "city_id": 342,
    "city_name": "Maowa",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 281
}, {
    "city_id": 588,
    "city_name": "Matajihat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Matajihat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 588
}, {
    "city_id": 725,
    "city_name": "Mathbaria",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mathbaria",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-11-02 16:42:54",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 725
}, {
    "city_id": 713,
    "city_name": "Matibhanga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Matibhanga",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-03-29 16:04:43",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 307
}, {
    "city_id": 281,
    "city_name": "Mawa",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 281
}, {
    "city_id": 385,
    "city_name": "Mawna",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 385
}, {
    "city_id": 286,
    "city_name": "Meherpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 286
}, {
    "city_id": 415,
    "city_name": "Miresshorai",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "MRSRI",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 415
}, {
    "city_id": 682,
    "city_name": "Mirganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mirganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-06 12:37:48",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 682
}, {
    "city_id": 749,
    "city_name": "Mirzapur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mirzapur ",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-01-31 15:01:19",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 34
}, {
    "city_id": 633,
    "city_name": "Mithachara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mithachara",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-03-10 12:18:01",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 633
}, {
    "city_id": 92,
    "city_name": "Mithapur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 92
}, {
    "city_id": 125,
    "city_name": "Modbaria",
    "city_status": 1,
    "sequence": 92,
    "city_short_name": "Modbaria",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 125
}, {
    "city_id": 662,
    "city_name": "Modhunaghat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Modhunaghat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-14 20:02:07",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 662
}, {
    "city_id": 117,
    "city_name": "Mohadevpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 117
}, {
    "city_id": 572,
    "city_name": "Mohammadpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mohammadpur",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 652,
    "city_name": "Mohanganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mohanganj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-10 13:02:39",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 652
}, {
    "city_id": 723,
    "city_name": "Moheskhali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Moheskhali",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-10-24 21:28:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 723
}, {
    "city_id": 638,
    "city_name": "Mohipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mohipur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-20 11:58:48",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 638
}, {
    "city_id": 450,
    "city_name": "Mohishkata",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mohishkata",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 450
}, {
    "city_id": 654,
    "city_name": "Mohiskata (Amtali)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mohiskata (Amtali)",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-12 11:02:37",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 654
}, {
    "city_id": 653,
    "city_name": "Mohiskata (Subidkhali)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mohiskata (Subidkhali)",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-12 11:01:00",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 653
}, {
    "city_id": 605,
    "city_name": "Mohonpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mohonpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 605
}, {
    "city_id": 764,
    "city_name": "Moju Chowdhury Hat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Moju Chowdhury Hat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-05-12 13:35:53",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 764
}, {
    "city_id": 87,
    "city_name": "Mokamtola",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 87
}, {
    "city_id": 609,
    "city_name": "Molani",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "M",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 609
}, {
    "city_id": 560,
    "city_name": "Mollahat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Mollahat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 560
}, {
    "city_id": 366,
    "city_name": "Mollarhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 366
}, {
    "city_id": 77,
    "city_name": "Mongalbari",
    "city_status": 1,
    "sequence": 77,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 77
}, {
    "city_id": 271,
    "city_name": "Mongla",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 271
}, {
    "city_id": 234,
    "city_name": "Monirampur",
    "city_status": 1,
    "sequence": 815,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 234
}, {
    "city_id": 282,
    "city_name": "Morrelganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Morrelgonj",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-09 15:13:56",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 229
}, {
    "city_id": 140,
    "city_name": "Mostapur",
    "city_status": 1,
    "sequence": 107,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 140
}, {
    "city_id": 514,
    "city_name": "Mostofapur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "m",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 514
}, {
    "city_id": 179,
    "city_name": "Moulvibazar",
    "city_status": 1,
    "sequence": 136,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Moulvibazar district is located in the north-eastern borderline of Bangladesh under Sylhet Division. Some notable tourist spots include: Lawachara National Park, Madhabkunda Falls, Hakaluki Haor, Hail Haor, Rajnagor Pakhi Bari, Orange Gardens, Madhadpur Lake, Bilashchhara Lake, Madhabpur Tea Garden Lake, Muraichora Eco Park, Barolekha Landscape, Monipuri Tribal, and Komolarani Lake. ",
    "parent_id": 179
}, {
    "city_id": 537,
    "city_name": "Moyendia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Moyendia",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 537
}, {
    "city_id": 540,
    "city_name": "Mujibnagar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "m",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 540
}, {
    "city_id": 559,
    "city_name": "Muksudpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Muksudpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 559
}, {
    "city_id": 634,
    "city_name": "Muktagacha",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "M",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-03-16 11:49:54",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 75
}, {
    "city_id": 581,
    "city_name": "Muladhuli",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "M",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 581
}, {
    "city_id": 526,
    "city_name": "Munshiganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "M",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 526
}, {
    "city_id": 75,
    "city_name": "Mymensingh",
    "city_status": 1,
    "sequence": 75,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 75
}, {
    "city_id": 704,
    "city_name": "Nachol",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Nachol",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-16 16:57:16",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 704
}, {
    "city_id": 357,
    "city_name": "Nagarbari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 357
}, {
    "city_id": 517,
    "city_name": "Nagarkanda",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "n",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 517
}, {
    "city_id": 16,
    "city_name": "Nagesshori",
    "city_status": 1,
    "sequence": 16,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 16
}, {
    "city_id": 120,
    "city_name": "Nagesshori",
    "city_status": 1,
    "sequence": 87,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 16
}, {
    "city_id": 687,
    "city_name": "Nakalia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Nakalia",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-17 16:11:01",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 59
}, {
    "city_id": 701,
    "city_name": "Nakla",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Nakla",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-09 17:23:57",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 75
}, {
    "city_id": 718,
    "city_name": "Nalta",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Nalta",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-10-06 15:25:32",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 718
}, {
    "city_id": 715,
    "city_name": "Nalua ",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Nalua",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-09-11 16:10:59",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 715
}, {
    "city_id": 685,
    "city_name": "Namuri",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Namuri",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-07 19:55:09",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 40
}, {
    "city_id": 745,
    "city_name": "Naniarchar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Naniarchar",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:36:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 745
}, {
    "city_id": 103,
    "city_name": "Naogaon",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Naogaon district is located in the northern part of Bangladesh under Rajshahi Division. There are 03 Municipalities in Naogaon named Patnitala, Naogaon, and Dhamoirhat. It holds some of the most important tourist attractions like Paharpur Purakirti and Buddhist Bihar, Patisar Royal Palace, Dhibor Lake, Jahanpur Garur Monument, Balihar Royal Palace, Kushumba Mosque, , Halud Bihar, Altopuri Bihar, Core of Chandan Nagor, Core of Damurhat Palace, Dubalhati Rajbari, Mohadevpur Razbari, Dibor Dighi, Gahon pirbabar Mazar, Hazarat Zahor Uddin Cistia Babar Mazar, Katabari Mazar, Dudulhati Royal Palace, Sadar Balihar Royal Palace, Sadar Vimer Panti, Dhamuirhat Dhamoirhat, Dhamoirhat Halud Bihars, Sapahar Joboi Bil; this place is also famous for Paddy, Potato, Wheat, Mango, Banana, Jute, Sugarcane, Water-Melon, Jack fruit, Banana, Oil seeds and other agro products.",
    "parent_id": 103
}, {
    "city_id": 279,
    "city_name": "Narail",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 279
}, {
    "city_id": 259,
    "city_name": "Narayanganj",
    "city_status": 1,
    "sequence": 4000,
    "city_short_name": "NGB",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 259
}, {
    "city_id": 244,
    "city_name": "Narsingdi",
    "city_status": 1,
    "sequence": 819,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 244
}, {
    "city_id": 689,
    "city_name": "Narsingdi (Velanagar)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Narsingdi (Velanagar)",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-07 18:07:17",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 244
}, {
    "city_id": 226,
    "city_name": "Natore",
    "city_status": 1,
    "sequence": 844,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 226
}, {
    "city_id": 169,
    "city_name": "Navaron",
    "city_status": 1,
    "sequence": 127,
    "city_short_name": "NVR",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 169
}, {
    "city_id": 137,
    "city_name": "Naykathi",
    "city_status": 1,
    "sequence": 104,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 137
}, {
    "city_id": 305,
    "city_name": "Nazipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 305
}, {
    "city_id": 459,
    "city_name": "Nazir Hat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Nazir Hat",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Nazir Hat is a small town in south-eastern Bangladesh and is located in the Chittagong District of Chittagong Division. It is a small yet beautiful town surrounded by a range of hills.",
    "parent_id": 70
}, {
    "city_id": 70,
    "city_name": "Nazirhat",
    "city_status": 1,
    "sequence": 70,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Nazir Hat is a small town in south-eastern Bangladesh and is located in the Chittagong District of Chittagong Division. It is a small yet beautiful town surrounded by a range of hills.",
    "parent_id": 70
}, {
    "city_id": 307,
    "city_name": "Nazirpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 307
}, {
    "city_id": 442,
    "city_name": "Nekmarad",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Nekmarad",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 442
}, {
    "city_id": 485,
    "city_name": "Netrakona",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "N",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 485
}, {
    "city_id": 208,
    "city_name": "Nila",
    "city_status": 1,
    "sequence": 160,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 208
}, {
    "city_id": 19,
    "city_name": "Nilphamari",
    "city_status": 1,
    "sequence": 19,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Nilphamari is a district in northern Bangladesh under Rangpur Division. There are a number of rivers in Nilphamari such as the Tista, Buritista, Isamoti, Jamuneshwari, Dhum, Kumlai, Charalkata, Sorbomongola, Salki, Chikli, Deonai and many more. Some of the famous tourist attraction sites include: Nill-Sagor, Uttara Export Processing Zone, Tista Barrage, Sayadpur Railway Factory, Power Plant, Chini Mosque, Sayadpur Air Port, Shadhinata Monument, Hari Dharma Paul Garh and Shahid Captain Bashar Gate, ",
    "parent_id": 19
}, {
    "city_id": 332,
    "city_name": "Noakhali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 332
}, {
    "city_id": 233,
    "city_name": "Noapara",
    "city_status": 1,
    "sequence": 815,
    "city_short_name": "Noapara",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 233
}, {
    "city_id": 272,
    "city_name": "Noorjahan",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 272
}, {
    "city_id": 176,
    "city_name": "Nowapara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 176
}, {
    "city_id": 717,
    "city_name": "Noya Bazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Noya Bazar",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-09-29 11:34:46",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 717
}, {
    "city_id": 116,
    "city_name": "Nozirpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 116
}, {
    "city_id": 648,
    "city_name": "Omidpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Omidpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-04 20:05:01",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 648
}, {
    "city_id": 59,
    "city_name": "Pabna",
    "city_status": 1,
    "sequence": 59,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 59
}, {
    "city_id": 388,
    "city_name": "Paglapir",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 388
}, {
    "city_id": 710,
    "city_name": "Paharpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Paharpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-03-08 11:23:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 710
}, {
    "city_id": 276,
    "city_name": "Paikgacha",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 276
}, {
    "city_id": 612,
    "city_name": "Paisarhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Paisarhat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 612
}, {
    "city_id": 524,
    "city_name": "Pakerhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "p",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 524
}, {
    "city_id": 639,
    "city_name": "Pakhimara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Pakhimara",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-20 12:02:59",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 639
}, {
    "city_id": 304,
    "city_name": "Pakshi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 304
}, {
    "city_id": 89,
    "city_name": "Palashbari",
    "city_status": 1,
    "sequence": 1,
    "city_short_name": "PB",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-11-05 20:48:00",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 89
}, {
    "city_id": 379,
    "city_name": "Palashbari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 89
}, {
    "city_id": 632,
    "city_name": "PalongKhali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "PK",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-03-05 18:22:57",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 68
}, {
    "city_id": 9,
    "city_name": "Panchagarh",
    "city_status": 1,
    "sequence": 9,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Panchagor district is located in the northern tip of Bangladesh under Rangpur Division. The previous name of the region was \u201cPancha- Gaura\u201d. Some of the tourist attraction sites in Panchagor are: Panchagor Suger Mill, Rocks Museum, Banglabandha Land Port, Bodeshari Temple, Mirgor, Mirzapur Mosque and Royal Palace, Kartoa Bridge, Domar Royal Palace, Golkadham Mondir, Moharajar Lake, three domed Moshjid at Mirzapur, Aloakhoa Royal Palace, Dak Banglo, and many more. ",
    "parent_id": 9
}, {
    "city_id": 79,
    "city_name": "Panchbibi",
    "city_status": 1,
    "sequence": 79,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 79
}, {
    "city_id": 746,
    "city_name": "Panchhari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Panchhari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:39:12",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 746
}, {
    "city_id": 554,
    "city_name": "Panchpara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Panchpara",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 554
}, {
    "city_id": 339,
    "city_name": "Panchtara",
    "city_status": 1,
    "sequence": 4403,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 339
}, {
    "city_id": 38,
    "city_name": "Pangsha",
    "city_status": 1,
    "sequence": 38,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 38
}, {
    "city_id": 590,
    "city_name": "Panpara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "P",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 590
}, {
    "city_id": 35,
    "city_name": "Parbatipur",
    "city_status": 1,
    "sequence": 35,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 35
}, {
    "city_id": 489,
    "city_name": "Parshuram",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "PRS",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 489
}, {
    "city_id": 325,
    "city_name": "Parulia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 325
}, {
    "city_id": 696,
    "city_name": "Pashapol",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Pashapol",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-25 21:12:06",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 51
}, {
    "city_id": 714,
    "city_name": "Patenga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Patenga",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-07-15 14:42:15",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 714
}, {
    "city_id": 312,
    "city_name": "Patgati",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 312
}, {
    "city_id": 42,
    "city_name": "Patgram",
    "city_status": 1,
    "sequence": 42,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 42
}, {
    "city_id": 377,
    "city_name": "Patharghata",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 377
}, {
    "city_id": 198,
    "city_name": "Patiya",
    "city_status": 1,
    "sequence": 150,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 198
}, {
    "city_id": 760,
    "city_name": "Patiya Crossing",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Patiya Crossing",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-03-08 13:55:56",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 760
}, {
    "city_id": 237,
    "city_name": "Patkelghata",
    "city_status": 1,
    "sequence": 818,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 237
}, {
    "city_id": 148,
    "city_name": "Patuakhali",
    "city_status": 1,
    "sequence": 115,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 148
}, {
    "city_id": 185,
    "city_name": "Paturia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 185
}, {
    "city_id": 187,
    "city_name": "Paturiya",
    "city_status": 1,
    "sequence": 138,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 185
}, {
    "city_id": 707,
    "city_name": "Pekua",
    "city_status": 1,
    "sequence": 1234,
    "city_short_name": "Pekua",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-28 15:22:02",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 707
}, {
    "city_id": 616,
    "city_name": "Petrapole",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "p",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 616
}, {
    "city_id": 751,
    "city_name": "Phoholal Baria",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Phoholal Baria",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-01-31 17:39:22",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 282
}, {
    "city_id": 255,
    "city_name": "Phulbari",
    "city_status": 1,
    "sequence": 634,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 255
}, {
    "city_id": 702,
    "city_name": "Phulpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Phulpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-09 17:24:20",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 75
}, {
    "city_id": 371,
    "city_name": "Phultala (Khulna)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "KHLP",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 174
}, {
    "city_id": 90,
    "city_name": "Pirganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 90
}, {
    "city_id": 676,
    "city_name": "Pirganj (Thakurgaon)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Pirganj (Thakurgaon)",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-11-23 14:01:24",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 676
}, {
    "city_id": 215,
    "city_name": "Pirojpur",
    "city_status": 1,
    "sequence": 333,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 215
}, {
    "city_id": 650,
    "city_name": "Pohordanga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Pohordanga",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-09 10:31:58",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 650
}, {
    "city_id": 752,
    "city_name": "Polli Mongol",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Polli Mongol",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-01-31 17:39:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 282
}, {
    "city_id": 548,
    "city_name": "Pragpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "p",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 548
}, {
    "city_id": 303,
    "city_name": "Puthia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 303
}, {
    "city_id": 144,
    "city_name": "Rahimatpur",
    "city_status": 1,
    "sequence": 111,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 144
}, {
    "city_id": 156,
    "city_name": "Rahmatpur",
    "city_status": 1,
    "sequence": 121,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 156
}, {
    "city_id": 691,
    "city_name": "Raipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Raipur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-11 20:31:27",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 589
}, {
    "city_id": 720,
    "city_name": "Raja Bari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Raja Bari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-10-11 14:47:10",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 720
}, {
    "city_id": 123,
    "city_name": "Rajapur",
    "city_status": 1,
    "sequence": 90,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 123
}, {
    "city_id": 673,
    "city_name": "Rajarhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Rajarhat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-11-03 17:39:38",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 673
}, {
    "city_id": 36,
    "city_name": "Rajbari",
    "city_status": 1,
    "sequence": 36,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 36
}, {
    "city_id": 561,
    "city_name": "Rajgonj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "R",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 561
}, {
    "city_id": 139,
    "city_name": "Rajoir",
    "city_status": 1,
    "sequence": 106,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 139
}, {
    "city_id": 112,
    "city_name": "Rajshahi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Rajshahi is a major city on the north bank of the Padma River, near the Bangladesh-India border. This city has been historically important since the early 18th century, during the British Colonial rule. Ruled by Maharajas, Kings and Rulers, the city bears witness to notable industrial and agricultural development. Rajshahi silk is infamous countrywide for its fine craftsmanship and quality. Along with the silk industry, it has  jute mills, textile mills, sugar mill and mango based industries. Notable tourist attraction sites include: Varendra Research Museum, Shrine of Shah Makhdum Rupos, Kamruzzaman Central Park and Zoo, Banks of the Padma River, Shaheb Bazar, Ghoramara, Shahid Zia Park, and much more!",
    "parent_id": 112
}, {
    "city_id": 558,
    "city_name": "Ramganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "R",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 558
}, {
    "city_id": 736,
    "city_name": "Ramgarh",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Ramgarh",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:22:20",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 736
}, {
    "city_id": 320,
    "city_name": "Ramgati",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 320
}, {
    "city_id": 206,
    "city_name": "Ramu",
    "city_status": 1,
    "sequence": 158,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 206
}, {
    "city_id": 460,
    "city_name": "Ramu Bypass",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Ramu Bypass",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 206
}, {
    "city_id": 71,
    "city_name": "Rangamati",
    "city_status": 1,
    "sequence": 71,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Rangamati, the administrative headquarters of Rangamati Hill District is the largest district of Bangladesh area wise. It is under Chittagong Division, located at the south-eastern side of Bangladesh. Rangamati is one of the most popular tourist spots, especially for people looking for an adventure. It is famous for beautiful landscapes, hills, lakes, hanging bridge, handicraft products, ivory jewellery, tribal museum, Chakma Rajbari, Rajbonbihar Pagoda, and many more.",
    "parent_id": 71
}, {
    "city_id": 7,
    "city_name": "Rangpur",
    "city_status": 1,
    "sequence": 7,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 1,
    "about_city": "Being the most important city under the Rangpur Division, it is the commercial hub for the surrounding districts. With the growing importance because of its global positioning, the city has developed a number of banks, insurance companies, hotels, restaurants, shopping malls, and other recreational centers. Some of the notable tourist attraction sites include: Tajhat palace, Town Hall, Jadu Nibash, Binodon Uddyan, and a lot of Jamidar baris.",
    "parent_id": 7
}, {
    "city_id": 711,
    "city_name": "Rangunia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Rangunia",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-03-18 12:01:06",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 47
}, {
    "city_id": 256,
    "city_name": "Raniganj",
    "city_status": 1,
    "sequence": 636,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 256
}, {
    "city_id": 656,
    "city_name": "Ranipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Ranipur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-12 11:21:17",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 656
}, {
    "city_id": 12,
    "city_name": "Ranirbondor",
    "city_status": 1,
    "sequence": 12,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 12
}, {
    "city_id": 693,
    "city_name": "Ranirhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Ranirhat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-24 18:36:00",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 693
}, {
    "city_id": 6,
    "city_name": "Ranisankail",
    "city_status": 1,
    "sequence": 6,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 6
}, {
    "city_id": 211,
    "city_name": "Raozan",
    "city_status": 1,
    "sequence": 163,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 211
}, {
    "city_id": 280,
    "city_name": "Rayenda",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 280
}, {
    "city_id": 135,
    "city_name": "Rayer Hat",
    "city_status": 1,
    "sequence": 102,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 135
}, {
    "city_id": 410,
    "city_name": "Raypur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "RP",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 410
}, {
    "city_id": 217,
    "city_name": "Razarhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 217
}, {
    "city_id": 29,
    "city_name": "RazarHut",
    "city_status": 1,
    "sequence": 29,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 217
}, {
    "city_id": 680,
    "city_name": "Robilar Bazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Robilar Bazar",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-06 12:35:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 680
}, {
    "city_id": 284,
    "city_name": "Rohanpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 284
}, {
    "city_id": 726,
    "city_name": "Rohomotpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Rohomotpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-11-02 16:52:46",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 726
}, {
    "city_id": 365,
    "city_name": "Royel Mor",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 174
}, {
    "city_id": 583,
    "city_name": "Ruhia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "R",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 583
}, {
    "city_id": 241,
    "city_name": "Rupatoli",
    "city_status": 1,
    "sequence": 899,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 241
}, {
    "city_id": 644,
    "city_name": "Rupdhan",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Rupdhan",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-28 07:52:39",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 644
}, {
    "city_id": 345,
    "city_name": "Rupgonj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 345
}, {
    "city_id": 582,
    "city_name": "Ruppur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "R",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 582
}, {
    "city_id": 159,
    "city_name": "Safa",
    "city_status": 1,
    "sequence": 123,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 159
}, {
    "city_id": 665,
    "city_name": "Safipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Safipur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-18 19:32:09",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 665
}, {
    "city_id": 300,
    "city_name": "Sagolnaia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 300
}, {
    "city_id": 657,
    "city_name": "Saheb Bari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Saheb Bari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-12 13:57:23",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 657
}, {
    "city_id": 8,
    "city_name": "Saidpur",
    "city_status": 1,
    "sequence": 8,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 8
}, {
    "city_id": 641,
    "city_name": "Sakhariya",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Sakhariya",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-06-20 12:10:16",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 641
}, {
    "city_id": 663,
    "city_name": "Sakhipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Sakhipur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-16 10:16:14",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 663
}, {
    "city_id": 154,
    "city_name": "Sanohar",
    "city_status": 1,
    "sequence": 119,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 154
}, {
    "city_id": 102,
    "city_name": "Santahar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 102
}, {
    "city_id": 115,
    "city_name": "Sapahar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 115
}, {
    "city_id": 668,
    "city_name": "Satkania",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Satkania",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-10-07 18:23:47",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 668
}, {
    "city_id": 167,
    "city_name": "Satkhali",
    "city_status": 1,
    "sequence": 127,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 167
}, {
    "city_id": 45,
    "city_name": "Satkhira",
    "city_status": 1,
    "sequence": 45,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Satkhira district is situated in the south-western part of Bangladesh under Khulna Division. Satkhira has many infamous tourist sports such as: Sundarban, Bura Kha Lake, Mandarbaria Sea Beach, Sapnabari, Mojaffar Garden and Resort, Dokkhin Talpotti, Shrine of Nalta, Shrine of Gunakarkati, Chaygharia Jora Shib Mondir, Shamsundar Temple, Karimondir, Sonabaria Moth and Temple, Jahajghata etc. Satkhira specializes in producing paddy, jute, sugarcane, musturd and sweets such as Sandesh. ",
    "parent_id": 45
}, {
    "city_id": 161,
    "city_name": "Satmatha",
    "city_status": 1,
    "sequence": 125,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 161
}, {
    "city_id": 699,
    "city_name": "Satmile",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Satmile",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-01-25 21:21:36",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 51
}, {
    "city_id": 190,
    "city_name": "Savar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Savar",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 190
}, {
    "city_id": 231,
    "city_name": "Semakhali",
    "city_status": 1,
    "sequence": 813,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 231
}, {
    "city_id": 319,
    "city_name": "Senbagh",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 319
}, {
    "city_id": 118,
    "city_name": "Setabganj",
    "city_status": 1,
    "sequence": 85,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 118
}, {
    "city_id": 61,
    "city_name": "Shahajadpur",
    "city_status": 1,
    "sequence": 61,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 61
}, {
    "city_id": 539,
    "city_name": "Shahidnagar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "s",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 539
}, {
    "city_id": 762,
    "city_name": "Shahjadpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Shahjadpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-03-23 00:53:18",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 762
}, {
    "city_id": 552,
    "city_name": "Shaildah",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Shaildah",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-21 10:09:40",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 552
}, {
    "city_id": 240,
    "city_name": "Shailkupa",
    "city_status": 1,
    "sequence": 773,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 240
}, {
    "city_id": 177,
    "city_name": "Shaistaganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 177
}, {
    "city_id": 463,
    "city_name": "Shaistaganj (Ulipur)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "ULPR",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 463
}, {
    "city_id": 538,
    "city_name": "Shalta",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Shalta",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 538
}, {
    "city_id": 194,
    "city_name": "Shanuhar",
    "city_status": 1,
    "sequence": 146,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 194
}, {
    "city_id": 622,
    "city_name": "Shariatpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "SP",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 622
}, {
    "city_id": 355,
    "city_name": "Shatia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 355
}, {
    "city_id": 620,
    "city_name": "Shator",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Shator",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 620
}, {
    "city_id": 520,
    "city_name": "Sheikhpara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "s",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 520
}, {
    "city_id": 531,
    "city_name": "Sherpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Sherpur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 531
}, {
    "city_id": 535,
    "city_name": "Sherpur ( Mymensingh )",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Sherpur ( Mymensingh )",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 535
}, {
    "city_id": 533,
    "city_name": "Sherpur (Jamalpur)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Sherpur (Jamalpur)",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 533
}, {
    "city_id": 97,
    "city_name": "Sherpur.",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Sherpur.",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-12-20 15:34:01",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 531
}, {
    "city_id": 111,
    "city_name": "Shibganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 111
}, {
    "city_id": 67,
    "city_name": "Shibgong",
    "city_status": 1,
    "sequence": 67,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 111
}, {
    "city_id": 225,
    "city_name": "Shihabganj",
    "city_status": 1,
    "sequence": 843,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 225
}, {
    "city_id": 458,
    "city_name": "Shofipur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Shofipur",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 458
}, {
    "city_id": 451,
    "city_name": "Shoilda",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "s",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 451
}, {
    "city_id": 91,
    "city_name": "Shotibari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 91
}, {
    "city_id": 46,
    "city_name": "Shyamnagar",
    "city_status": 1,
    "sequence": 46,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 46
}, {
    "city_id": 532,
    "city_name": "Siliguri (INDIA)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "NR",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 532
}, {
    "city_id": 218,
    "city_name": "Sirajganj",
    "city_status": 1,
    "sequence": 500,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 218
}, {
    "city_id": 675,
    "city_name": "Sirajganj  More",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Sirajganj  More",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-11-18 16:55:35",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 675
}, {
    "city_id": 413,
    "city_name": "Sitakunda",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Sitakunda",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 413
}, {
    "city_id": 386,
    "city_name": "Somir Munsir Hat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 386
}, {
    "city_id": 360,
    "city_name": "Sonadanga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 174
}, {
    "city_id": 490,
    "city_name": "Sonagazi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "S",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 490
}, {
    "city_id": 389,
    "city_name": "Sonaimuri (Noakhali)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-02-24 13:38:18",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 389
}, {
    "city_id": 299,
    "city_name": "Sonapur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 299
}, {
    "city_id": 492,
    "city_name": "Sonatala",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "SONTL",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 492
}, {
    "city_id": 621,
    "city_name": "Sosrail",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Sosrail",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 621
}, {
    "city_id": 688,
    "city_name": "Square Masterbari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Square Masterbari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-29 17:32:04",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 688
}, {
    "city_id": 180,
    "city_name": "Sreemangal",
    "city_status": 1,
    "sequence": 137,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Sreemangal is located in the north-eastern part of Bangladesh under Sylhet division. It is also known as the tea capital of Bangladesh with beautiful hilly areas covered with tea estates and pineapple gardens. Sreemangal is famous for its high quality tea, which is also exported worldwide. This place is also vastly famous for its natural beauty full of forests and wildlife; hence it covers as a prime Eco-Tourism Destination. Popular attractions in Sreemangal include: Lawachara National Park (tropical rain forest), Madhabkunda Waterfall (highest waterfall in Bangladesh), Madhabpur lake (the lake of lotus), Tea gardens, Monipuri & Khashia tribal villages, Baikkabeel (wetland of seasonal birds) and the infamous seven-layer tea found at Nilkantha Tea Cabin.",
    "parent_id": 180
}, {
    "city_id": 732,
    "city_name": "St. Martin",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "St. Martin",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:13:28",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 732
}, {
    "city_id": 128,
    "city_name": "Subidkhali",
    "city_status": 1,
    "sequence": 95,
    "city_short_name": "Subidkhali",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-13 10:01:29",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 128
}, {
    "city_id": 288,
    "city_name": "Sunamganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 288
}, {
    "city_id": 529,
    "city_name": "Sunamganj (Jawa)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "j",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 529
}, {
    "city_id": 528,
    "city_name": "Sunamganj (Pagla)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "p",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 528
}, {
    "city_id": 136,
    "city_name": "Swarupkati",
    "city_status": 1,
    "sequence": 103,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 136
}, {
    "city_id": 83,
    "city_name": "Sylhet",
    "city_status": 1,
    "sequence": 83,
    "city_short_name": "Sylhet",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Sylhet, historically known as Jalalabad, is a major city that lies on the north-east part of Bangladesh. It is a relatively small city, however, with beautiful tourist destinations like, Jaflong, Lalakhal, Madhobpur Lake, HumHum waterfalls, Ratargul forest and other areas; it is one of the leading tourist destinations in the country. Sylhet also has one of the highest literacy rates in Bangladesh. Sylhet is sometimes called the second London as well.",
    "parent_id": 83
}, {
    "city_id": 735,
    "city_name": "Tabalchari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Tabalchari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-12-30 15:20:21",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 735
}, {
    "city_id": 747,
    "city_name": "Taindong",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Taindong",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-01-02 18:00:24",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 747
}, {
    "city_id": 283,
    "city_name": "Tala",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 283
}, {
    "city_id": 566,
    "city_name": "Talma",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Talma",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 566
}, {
    "city_id": 400,
    "city_name": "Taltali",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Taltali",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 400
}, {
    "city_id": 569,
    "city_name": "Tamabil",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Tamabil",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 569
}, {
    "city_id": 34,
    "city_name": "Tangail",
    "city_status": 1,
    "sequence": 34,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Tangail district is at the central part of Bangladesh. There are various opinions about the naming of Tangail region. Agro Products are, Paddy, Jute, Sugarcane, Wheat, Pulse, Oil seeds, Vegetable,  Pone-Apple, Mango, Jack fruit, Banana, Litchi etc. Tourist Places in Tangail District are Madhupur National Park, Karatia Landlord Home, Mirzapur Cadet College, Dokhla Rest House, Jamuna Resort, Alenga Resort, Kumudiny Hospital, Vharatoshari Homes, Jamuna Multi Purpose Bridge, Ghatail Sagordighi and Gupta Brindabon, Mawlana Bhashani Graveyard, Atia Jame Mosque, Atia Royal Palace, Dhonbari Royal Palace, Bangbandhu Multipurpose Bridge, Hindu Paul Temple, Sagor Lake, Ishamoti Lake, Police Training Center, Modhupur Temple, Upandra Sarobar, Nagpur Chowdhury Bari etc.",
    "parent_id": 34
}, {
    "city_id": 674,
    "city_name": "Tangail More",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Tangail More",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-11-18 16:51:43",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 674
}, {
    "city_id": 576,
    "city_name": "Tangonmari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Tangonmari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 576
}, {
    "city_id": 18,
    "city_name": "Taraganj",
    "city_status": 1,
    "sequence": 18,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 18
}, {
    "city_id": 107,
    "city_name": "Taragonj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 107
}, {
    "city_id": 658,
    "city_name": "Tarikata",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Tarikata",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-09-12 14:00:18",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 658
}, {
    "city_id": 585,
    "city_name": "Teesta",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Te",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 585
}, {
    "city_id": 402,
    "city_name": "Tekerhat",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Tekerhat",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 402
}, {
    "city_id": 68,
    "city_name": "Teknaf",
    "city_status": 1,
    "sequence": 68,
    "city_short_name": "TEK",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Teknaf, Upazila of Cox's Bazar District, forms the southern-most point of Bangladesh under Chittagong Division. Because of its geographical location, this sub district has become an attraction site for both foreign and local tourists between winter and autumn. Notable attractions in teknaf include beaches and sand dunes, canals and lagoons and marine habitat. This place also holds the natural Mangrove forest, which supports numerous habitats and different kinds of fish.",
    "parent_id": 68
}, {
    "city_id": 758,
    "city_name": "Temukhi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Temukhi",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2022-03-01 13:25:10",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 758
}, {
    "city_id": 65,
    "city_name": "Tetulia",
    "city_status": 1,
    "sequence": 65,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 65
}, {
    "city_id": 11,
    "city_name": "Thakurgaon",
    "city_status": 1,
    "sequence": 11,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",
    "created_by": 0,
    "updated_by": 0,
    "top_city": 0,
    "about_city": "Thakurgaon district is located in the north-western borderline of Bangladesh. With the initiative of the Tagore family, a police station was established nearby the current Thakurgaon Municipality during the East India Company period, and thus it was named after them. Thakurgaon has numerous attraction sites including: Ranishagor Lake, Ranishankar Royal Palace, Haripur Royal Palace, Pirgonj Fun City, Senua Bridge, Gorakkhya Nath Temple, Bolaka Park, Jagadal Royal Palace, Tongnath Royal Palace, Old Air Port (Destroyed during the Second World War), Jomidar Moshjid at Shibganj, Ramrai Lake, Khunia Lake, Gorkoi Heritage, the river of Kulic, Khunia Dhighi Memorial, Harinmari Shibmondir, Gobinda Nagor Temple, Koram Khan Garh, Tangon Dam, Shapla Peala Lake, Bangla Garh, Malduar Royal Palace and many more!",
    "parent_id": 11
}, {
    "city_id": 606,
    "city_name": "Thakurgaon(Road)",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Thakurgaon(Road)",
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 11
}, {
    "city_id": 728,
    "city_name": "Thakurkona",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Thakurkona",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2021-11-28 16:56:12",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 485
}, {
    "city_id": 98,
    "city_name": "Thonthonia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 10
}, {
    "city_id": 99,
    "city_name": "Tinmatha",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 10
}, {
    "city_id": 315,
    "city_name": "Tongi",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 1
}, {
    "city_id": 143,
    "city_name": "Torky",
    "city_status": 1,
    "sequence": 110,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 143
}, {
    "city_id": 306,
    "city_name": "Tungipara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 306
}, {
    "city_id": 352,
    "city_name": "Tushbandha",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 352
}, {
    "city_id": 106,
    "city_name": "Tushbhander",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 106
}, {
    "city_id": 160,
    "city_name": "Tuskhali",
    "city_status": 1,
    "sequence": 124,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 160
}, {
    "city_id": 631,
    "city_name": "Ukhia",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Ukhia",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-03-01 17:03:12",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 631
}, {
    "city_id": 207,
    "city_name": "Ukhiya ",
    "city_status": 1,
    "sequence": 159,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 207
}, {
    "city_id": 14,
    "city_name": "Ulipur",
    "city_status": 1,
    "sequence": 14,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 14
}, {
    "city_id": 60,
    "city_name": "Ullapra",
    "city_status": 1,
    "sequence": 60,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 60
}, {
    "city_id": 192,
    "city_name": "Vandariya",
    "city_status": 1,
    "sequence": 144,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 192
}, {
    "city_id": 602,
    "city_name": "Vandarpur",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "V",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 602
}, {
    "city_id": 270,
    "city_name": "Vanga",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 354
}, {
    "city_id": 269,
    "city_name": "Vatiapara",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 0,
    "created_at": "2020-02-10 00:12:49",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 268
}, {
    "city_id": 411,
    "city_name": "Vatiary",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Vatiary",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 411
}, {
    "city_id": 335,
    "city_name": "Vobaniganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 335
}, {
    "city_id": 670,
    "city_name": "Vober Bazar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "Vober Bazar",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-10-13 17:49:54",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 670
}, {
    "city_id": 630,
    "city_name": "Vojonpur",
    "city_status": 1,
    "sequence": 1,
    "city_short_name": "V",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-02-29 13:19:31",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 9
}, {
    "city_id": 684,
    "city_name": "Votmari",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": " Votmari",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-12-07 19:47:50",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 40
}, {
    "city_id": 336,
    "city_name": "Voulaganj",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 336
}, {
    "city_id": 141,
    "city_name": "Vurghata",
    "city_status": 1,
    "sequence": 108,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 141
}, {
    "city_id": 542,
    "city_name": "Zianagar",
    "city_status": 1,
    "sequence": 0,
    "city_short_name": "z",
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 542
}, {
    "city_id": 56,
    "city_name": "ZibonNagar",
    "city_status": 1,
    "sequence": 56,
    "city_short_name": null,
    "is_enroute": 1,
    "is_enable_for_web": 1,
    "created_at": "2020-01-20 01:33:44",
    "updated_at": "0000-00-00 00:00:00",

    "parent_id": 56
}];