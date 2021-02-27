let countryCodes = [{ "name": "Afghanistan", "alpha": "AF" }, { "name": "Åland Islands", "alpha": "AX" }, { "name": "Albania", "alpha": "AL" }, { "name": "Algeria", "alpha": "DZ" }, { "name": "American Samoa", "alpha": "AS" }, { "name": "Andorra", "alpha": "AD" }, { "name": "Angola", "alpha": "AO" }, { "name": "Anguilla", "alpha": "AI" }, { "name": "Antarctica", "alpha": "AQ" }, { "name": "Antigua and Barbuda", "alpha": "AG" }, { "name": "Argentina", "alpha": "AR" }, { "name": "Armenia", "alpha": "AM" }, { "name": "Aruba", "alpha": "AW" }, { "name": "Australia", "alpha": "AU" }, { "name": "Austria", "alpha": "AT" }, { "name": "Azerbaijan", "alpha": "AZ" }, { "name": "Bahamas", "alpha": "BS" }, { "name": "Bahrain", "alpha": "BH" }, { "name": "Bangladesh", "alpha": "BD" }, { "name": "Barbados", "alpha": "BB" }, { "name": "Belarus", "alpha": "BY" }, { "name": "Belgium", "alpha": "BE" }, { "name": "Belize", "alpha": "BZ" }, { "name": "Benin", "alpha": "BJ" }, { "name": "Bermuda", "alpha": "BM" }, { "name": "Bhutan", "alpha": "BT" }, { "name": "Bolivia (Plurinational State of)", "alpha": "BO" }, { "name": "Bonaire, Sint Eustatius and Saba", "alpha": "BQ" }, { "name": "Bosnia and Herzegovina", "alpha": "BA" }, { "name": "Botswana", "alpha": "BW" }, { "name": "Bouvet Island", "alpha": "BV" }, { "name": "Brazil", "alpha": "BR" }, { "name": "British Indian Ocean Territory", "alpha": "IO" }, { "name": "Brunei Darussalam", "alpha": "BN" }, { "name": "Bulgaria", "alpha": "BG" }, { "name": "Burkina Faso", "alpha": "BF" }, { "name": "Burundi", "alpha": "BI" }, { "name": "Cabo Verde", "alpha": "CV" }, { "name": "Cambodia", "alpha": "KH" }, { "name": "Cameroon", "alpha": "CM" }, { "name": "Canada", "alpha": "CA" }, { "name": "Cayman Islands", "alpha": "KY" }, { "name": "Central African Republic", "alpha": "CF" }, { "name": "Chad", "alpha": "TD" }, { "name": "Chile", "alpha": "CL" }, { "name": "China", "alpha": "CN" }, { "name": "Christmas Island", "alpha": "CX" }, { "name": "Cocos (Keeling) Islands", "alpha": "CC" }, { "name": "Colombia", "alpha": "CO" }, { "name": "Comoros", "alpha": "KM" }, { "name": "Congo", "alpha": "CG" }, { "name": "Congo, Democratic Republic of the", "alpha": "CD" }, { "name": "Cook Islands", "alpha": "CK" }, { "name": "Costa Rica", "alpha": "CR" }, { "name": "Côte d'Ivoire", "alpha": "CI" }, { "name": "Croatia", "alpha": "HR" }, { "name": "Cuba", "alpha": "CU" }, { "name": "Curaçao", "alpha": "CW" }, { "name": "Cyprus", "alpha": "CY" }, { "name": "Czechia", "alpha": "CZ" }, { "name": "Denmark", "alpha": "DK" }, { "name": "Djibouti", "alpha": "DJ" }, { "name": "Dominica", "alpha": "DM" }, { "name": "Dominican Republic", "alpha": "DO" }, { "name": "Ecuador", "alpha": "EC" }, { "name": "Egypt", "alpha": "EG" }, { "name": "El Salvador", "alpha": "SV" }, { "name": "Equatorial Guinea", "alpha": "GQ" }, { "name": "Eritrea", "alpha": "ER" }, { "name": "Estonia", "alpha": "EE" }, { "name": "Eswatini", "alpha": "SZ" }, { "name": "Ethiopia", "alpha": "ET" }, { "name": "Falkland Islands (Malvinas)", "alpha": "FK" }, { "name": "Faroe Islands", "alpha": "FO" }, { "name": "Fiji", "alpha": "FJ" }, { "name": "Finland", "alpha": "FI" }, { "name": "France", "alpha": "FR" }, { "name": "French Guiana", "alpha": "GF" }, { "name": "French Polynesia", "alpha": "PF" }, { "name": "French Southern Territories", "alpha": "TF" }, { "name": "Gabon", "alpha": "GA" }, { "name": "Gambia", "alpha": "GM" }, { "name": "Georgia", "alpha": "GE" }, { "name": "Germany", "alpha": "DE" }, { "name": "Ghana", "alpha": "GH" }, { "name": "Gibraltar", "alpha": "GI" }, { "name": "Greece", "alpha": "GR" }, { "name": "Greenland", "alpha": "GL" }, { "name": "Grenada", "alpha": "GD" }, { "name": "Guadeloupe", "alpha": "GP" }, { "name": "Guam", "alpha": "GU" }, { "name": "Guatemala", "alpha": "GT" }, { "name": "Guernsey", "alpha": "GG" }, { "name": "Guinea", "alpha": "GN" }, { "name": "Guinea-Bissau", "alpha": "GW" }, { "name": "Guyana", "alpha": "GY" }, { "name": "Haiti", "alpha": "HT" }, { "name": "Heard Island and McDonald Islands", "alpha": "HM" }, { "name": "Holy See", "alpha": "VA" }, { "name": "Honduras", "alpha": "HN" }, { "name": "Hong Kong", "alpha": "HK" }, { "name": "Hungary", "alpha": "HU" }, { "name": "Iceland", "alpha": "IS" }, { "name": "India", "alpha": "IN" }, { "name": "Indonesia", "alpha": "ID" }, { "name": "Iran (Islamic Republic of)", "alpha": "IR" }, { "name": "Iraq", "alpha": "IQ" }, { "name": "Ireland", "alpha": "IE" }, { "name": "Isle of Man", "alpha": "IM" }, { "name": "Israel", "alpha": "IL" }, { "name": "Italy", "alpha": "IT" }, { "name": "Jamaica", "alpha": "JM" }, { "name": "Japan", "alpha": "JP" }, { "name": "Jersey", "alpha": "JE" }, { "name": "Jordan", "alpha": "JO" }, { "name": "Kazakhstan", "alpha": "KZ" }, { "name": "Kenya", "alpha": "KE" }, { "name": "Kiribati", "alpha": "KI" }, { "name": "Korea (Democratic People's Republic of)", "alpha": "KP" }, { "name": "Korea, Republic of", "alpha": "KR" }, { "name": "Kuwait", "alpha": "KW" }, { "name": "Kyrgyzstan", "alpha": "KG" }, { "name": "Lao People's Democratic Republic", "alpha": "LA" }, { "name": "Latvia", "alpha": "LV" }, { "name": "Lebanon", "alpha": "LB" }, { "name": "Lesotho", "alpha": "LS" }, { "name": "Liberia", "alpha": "LR" }, { "name": "Libya", "alpha": "LY" }, { "name": "Liechtenstein", "alpha": "LI" }, { "name": "Lithuania", "alpha": "LT" }, { "name": "Luxembourg", "alpha": "LU" }, { "name": "Macao", "alpha": "MO" }, { "name": "Madagascar", "alpha": "MG" }, { "name": "Malawi", "alpha": "MW" }, { "name": "Malaysia", "alpha": "MY" }, { "name": "Maldives", "alpha": "MV" }, { "name": "Mali", "alpha": "ML" }, { "name": "Malta", "alpha": "MT" }, { "name": "Marshall Islands", "alpha": "MH" }, { "name": "Martinique", "alpha": "MQ" }, { "name": "Mauritania", "alpha": "MR" }, { "name": "Mauritius", "alpha": "MU" }, { "name": "Mayotte", "alpha": "YT" }, { "name": "Mexico", "alpha": "MX" }, { "name": "Micronesia (Federated States of)", "alpha": "FM" }, { "name": "Moldova, Republic of", "alpha": "MD" }, { "name": "Monaco", "alpha": "MC" }, { "name": "Mongolia", "alpha": "MN" }, { "name": "Montenegro", "alpha": "ME" }, { "name": "Montserrat", "alpha": "MS" }, { "name": "Morocco", "alpha": "MA" }, { "name": "Mozambique", "alpha": "MZ" }, { "name": "Myanmar", "alpha": "MM" }, { "name": "Namibia", "alpha": "NA" }, { "name": "Nauru", "alpha": "NR" }, { "name": "Nepal", "alpha": "NP" }, { "name": "Netherlands", "alpha": "NL" }, { "name": "New Caledonia", "alpha": "NC" }, { "name": "New Zealand", "alpha": "NZ" }, { "name": "Nicaragua", "alpha": "NI" }, { "name": "Niger", "alpha": "NE" }, { "name": "Nigeria", "alpha": "NG" }, { "name": "Niue", "alpha": "NU" }, { "name": "Norfolk Island", "alpha": "NF" }, { "name": "North Macedonia", "alpha": "MK" }, { "name": "Northern Mariana Islands", "alpha": "MP" }, { "name": "Norway", "alpha": "NO" }, { "name": "Oman", "alpha": "OM" }, { "name": "Pakistan", "alpha": "PK" }, { "name": "Palau", "alpha": "PW" }, { "name": "Palestine, State of", "alpha": "PS" }, { "name": "Panama", "alpha": "PA" }, { "name": "Papua New Guinea", "alpha": "PG" }, { "name": "Paraguay", "alpha": "PY" }, { "name": "Peru", "alpha": "PE" }, { "name": "Philippines", "alpha": "PH" }, { "name": "Pitcairn", "alpha": "PN" }, { "name": "Poland", "alpha": "PL" }, { "name": "Portugal", "alpha": "PT" }, { "name": "Puerto Rico", "alpha": "PR" }, { "name": "Qatar", "alpha": "QA" }, { "name": "Réunion", "alpha": "RE" }, { "name": "Romania", "alpha": "RO" }, { "name": "Russian Federation", "alpha": "RU" }, { "name": "Rwanda", "alpha": "RW" }, { "name": "Saint Barthélemy", "alpha": "BL" }, { "name": "Saint Helena, Ascension and Tristan da Cunha", "alpha": "SH" }, { "name": "Saint Kitts and Nevis", "alpha": "KN" }, { "name": "Saint Lucia", "alpha": "LC" }, { "name": "Saint Martin (French part)", "alpha": "MF" }, { "name": "Saint Pierre and Miquelon", "alpha": "PM" }, { "name": "Saint Vincent and the Grenadines", "alpha": "VC" }, { "name": "Samoa", "alpha": "WS" }, { "name": "San Marino", "alpha": "SM" }, { "name": "Sao Tome and Principe", "alpha": "ST" }, { "name": "Saudi Arabia", "alpha": "SA" }, { "name": "Senegal", "alpha": "SN" }, { "name": "Serbia", "alpha": "RS" }, { "name": "Seychelles", "alpha": "SC" }, { "name": "Sierra Leone", "alpha": "SL" }, { "name": "Singapore", "alpha": "SG" }, { "name": "Sint Maarten (Dutch part)", "alpha": "SX" }, { "name": "Slovakia", "alpha": "SK" }, { "name": "Slovenia", "alpha": "SI" }, { "name": "Solomon Islands", "alpha": "SB" }, { "name": "Somalia", "alpha": "SO" }, { "name": "South Africa", "alpha": "ZA" }, { "name": "South Georgia and the South Sandwich Islands", "alpha": "GS" }, { "name": "South Sudan", "alpha": "SS" }, { "name": "Spain", "alpha": "ES" }, { "name": "Sri Lanka", "alpha": "LK" }, { "name": "Sudan", "alpha": "SD" }, { "name": "Suriname", "alpha": "SR" }, { "name": "Svalbard and Jan Mayen", "alpha": "SJ" }, { "name": "Sweden", "alpha": "SE" }, { "name": "Switzerland", "alpha": "CH" }, { "name": "Syrian Arab Republic", "alpha": "SY" }, { "name": "Taiwan, Province of China", "alpha": "TW" }, { "name": "Tajikistan", "alpha": "TJ" }, { "name": "Tanzania, United Republic of", "alpha": "TZ" }, { "name": "Thailand", "alpha": "TH" }, { "name": "Timor-Leste", "alpha": "TL" }, { "name": "Togo", "alpha": "TG" }, { "name": "Tokelau", "alpha": "TK" }, { "name": "Tonga", "alpha": "TO" }, { "name": "Trinidad and Tobago", "alpha": "TT" }, { "name": "Tunisia", "alpha": "TN" }, { "name": "Turkey", "alpha": "TR" }, { "name": "Turkmenistan", "alpha": "TM" }, { "name": "Turks and Caicos Islands", "alpha": "TC" }, { "name": "Tuvalu", "alpha": "TV" }, { "name": "Uganda", "alpha": "UG" }, { "name": "Ukraine", "alpha": "UA" }, { "name": "United Arab Emirates", "alpha": "AE" }, { "name": "United Kingdom of Great Britain and Northern Ireland", "alpha": "GB" }, { "name": "United States of America", "alpha": "US" }, { "name": "United States Minor Outlying Islands", "alpha": "UM" }, { "name": "Uruguay", "alpha": "UY" }, { "name": "Uzbekistan", "alpha": "UZ" }, { "name": "Vanuatu", "alpha": "VU" }, { "name": "Venezuela (Bolivarian Republic of)", "alpha": "VE" }, { "name": "Viet Nam", "alpha": "VN" }, { "name": "Virgin Islands (British)", "alpha": "VG" }, { "name": "Virgin Islands (U.S.)", "alpha": "VI" }, { "name": "Wallis and Futuna", "alpha": "WF" }, { "name": "Western Sahara", "alpha": "EH" }, { "name": "Yemen", "alpha": "YE" }, { "name": "Zambia", "alpha": "ZM" }, { "name": "Zimbabwe", "alpha": "ZW" }];
let alreadyCalled = false;
document.getElementById("calendarSubmit").addEventListener("click", function (event) {
    event.preventDefault();

    if (!alreadyCalled) {
        const url2 = "https://calendarific.com/api/v2/countries?&api_key=042a2849f5b6f1dd93380bb825c774d41882fdd2";
        fetch(url2)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
                let country = '<div class="country-output"><div class="intro"><h1 class="location">Supported Countries</h2></div>';
                country += '<div class="country-list">';
                for (let i = 0; i < json.response.countries.length; ++i) {
                    country += '<div class="individual-country"><h2 class="country">';
                    country += json.response.countries[i].country_name + ' (' + json.response.countries[i]['iso-3166'] + ')</h2>';
                    country += '<p>Total holidays: ' + json.response.countries[i].total_holidays + '</p>';
                    country += '<p>Supported languages: ' + json.response.countries[i].supported_languages + '</p></div>';
                }
                country += "</div></div>";
                document.getElementById("countryResults").innerHTML = country;
            })

        const url3 = "https://calendarific.com/api/v2/languages?&api_key=042a2849f5b6f1dd93380bb825c774d41882fdd2";
        fetch(url3)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
                let languages = '<h1 class="intro">Supported Languages</h1><div class="languages">';
                for (let i = 0; i < json.response.languages.length; ++i) {
                    languages += '<h4>' + json.response.languages[i].name + ' (<span class="native">' + json.response.languages[i].nativeName + '</span>)</h4>';
                }
                languages += "</div>";
                document.getElementById("languageResults").innerHTML = languages;
            })
        alreadyCalled = true;
    }

    const value = document.getElementById("calendarInput").value;
    const year = document.getElementById("yearInput").value;
    if (value === "" || year === "") {
        document.getElementById("errorResult").innerHTML = "Please input a valid country and year (0-2049 BCE). See below for a list of available countries.";
        return;
    }
    var code = '';
    if (value.length !== 2) {
        for (var i = 0; i < countryCodes.length; ++i) {
            if (countryCodes[i].name === value) {
                code = countryCodes[i].alpha;
            }
        }
    }
    else {
        code = value.toUpperCase();
    }
    if (code === '') {
        document.getElementById("errorResult").innerHTML = "Please input a valid country or country code. See below for a list of available countries.";
        return;
    }
    if (year > 2049 || year < 0) {
        document.getElementById("errorResult").innerHTML = "Please input a valid year (0-2049 BCE).";
        return;
    }
    document.getElementById("errorResult").innerHTML = "";
    const url = "https://calendarific.com/api/v2/holidays?&api_key=042a2849f5b6f1dd93380bb825c774d41882fdd2&country=" + code + "&year=" + year;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += '<div class="intro"><h1 class="location">Holidays in ' + json.response.holidays[0].country.name + " (" + code + ")</h1></div>";
            results += '<div class="holiday-list">';
            var month = 0;
            for (let i = 0; i < json.response.holidays.length; i++) {
                if (json.response.holidays[i].date.datetime.month !== month) {
                    month += 1;
                    if (month > 1) {
                        results += '</div>';
                        if (month % 2 === 1) {
                            results += '<div class="break"></div><div class="break"></div>'
                        }
                    }
                    results += '<div class="months" id="month-' + month + '"><h2>';
                    switch (month) {
                        case 1:
                            results += "January Holidays";
                            break;
                        case 2:
                            results += "February Holidays";
                            break;
                        case 3:
                            results += "March Holidays";
                            break;
                        case 4:
                            results += "April Holidays";
                            break;
                        case 5:
                            results += "May Holidays";
                            break;
                        case 6:
                            results += "June Holidays";
                            break;
                        case 7:
                            results += "July Holidays";
                            break;
                        case 8:
                            results += "August Holidays";
                            break;
                        case 9:
                            results += "September Holidays";
                            break;
                        case 10:
                            results += "October Holidays";
                            break;
                        case 11:
                            results += "November Holidays";
                            break;
                        case 12:
                            results += "December Holidays";
                            break;
                    }
                    results += "</h2>";
                }
                results += "<h3 holiday-name>" + json.response.holidays[i].name + "</h3>";
                results += '<p>Date: ' + json.response.holidays[i].date.iso + '</p>';
                results += '<p>' + json.response.holidays[i].description + '</p>';
                if (json.response.holidays[i].states !== "All") {
                    var numState = json.response.holidays[i].states.length;
                    results += '<p>' + numState + ' state(s) observe it: ';
                    for (let j = 0; j < json.response.holidays[i].states.length; ++j) {
                        if (j > 0) {
                            results += ", "
                        }
                        results += json.response.holidays[i].states[j].name;
                            + " ";
                    }
                    results += "</p>";
                }
            }
            results += "</div>";
            document.getElementById("holidayResults").innerHTML = results;
        });
});