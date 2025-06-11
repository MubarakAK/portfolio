let content = document.getElementsByClassName("content")[0]
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let valuea = document.getElementById("valuea");
let valueb = document.getElementById("valueb");
let inpbutton = document.getElementById("inpbutton");
let require, url, city, answer
let temp, wind, description, tempanswer, denomination1, denomination2, value1, value2, solution, no, first, second, check
let forecast = []
inp1.value = 'USD'
valuea.value = '1'
city = 'Berlin'
urlcurrency = `https://latest.currency-api.pages.dev/v1/currencies/usd.json`


tempanswer = {
	"date": "2025-06-10",
	"usd": {
		"1inch": 4.595548,
		"aave": 0.0034682219,
		"ada": 1.35728267,
		"aed": 3.6725,
		"afn": 69.82976413,
		"agix": 2.87605694,
		"akt": 0.74134761,
		"algo": 4.96784282,
		"all": 86.1291509,
		"amd": 382.2107789,
		"amp": 245.67138898,
		"ang": 1.80260469,
		"aoa": 917.78786796,
		"ape": 1.37443174,
		"apt": 0.20081696,
		"ar": 0.14552257,
		"arb": 2.67789109,
		"ars": 1185.30844566,
		"atom": 0.22433855,
		"ats": 12.08106281,
		"aud": 1.53763113,
		"avax": 0.045366001,
		"awg": 1.79,
		"axs": 0.38896437,
		"azm": 8499.99845475,
		"azn": 1.69999969,
		"bake": 8.58681433,
		"bam": 1.71715043,
		"bat": 7.2014382,
		"bbd": 2,
		"bch": 0.0023494242,
		"bdt": 122.23611225,
		"bef": 35.41702329,
		"bgn": 1.71715043,
		"bhd": 0.376,
		"bif": 2976.5944255,
		"bmd": 1,
		"bnb": 0.0015016645,
		"bnd": 1.28840623,
		"bob": 6.91067585,
		"brl": 5.56013503,
		"bsd": 1,
		"bsv": 0.028994458,
		"bsw": 37.37472381,
		"btc": 0.0000091255,
		"btcb": 5.15885829,
		"btg": 1.39154801,
		"btn": 85.64103153,
		"btt": 1409042.19693233,
		"busd": 1.00086782,
		"bwp": 13.37908824,
		"byn": 3.27479309,
		"byr": 32747.93089434,
		"bzd": 2.01278173,
		"cad": 1.37149214,
		"cake": 0.40485447,
		"cdf": 2905.32783671,
		"celo": 3.01921616,
		"cfx": 11.56109123,
		"chf": 0.82401801,
		"chz": 25.16320547,
		"clp": 936.4057953,
		"cnh": 7.18454393,
		"cny": 7.18490821,
		"comp": 0.018504744,
		"cop": 4140.29287444,
		"crc": 508.82840242,
		"cro": 9.85364442,
		"crv": 1.4279534,
		"cspr": 73.81065881,
		"cuc": 1,
		"cup": 24.01019298,
		"cve": 96.8132087,
		"cvx": 0.34234313,
		"cyp": 0.51385013,
		"czk": 21.76890676,
		"dai": 1.00106803,
		"dash": 0.044793179,
		"dcr": 0.064494179,
		"dem": 1.71715043,
		"dfi": 175.29845019,
		"djf": 177.99533567,
		"dkk": 6.54989389,
		"doge": 5.13716281,
		"dop": 59.35831294,
		"dot": 0.2380346,
		"dydx": 1.75951691,
		"dzd": 131.60514461,
		"eek": 13.73720344,
		"egld": 0.063334614,
		"egp": 49.64281717,
		"enj": 12.6287882,
		"eos": 1.6027774,
		"ern": 15,
		"esp": 146.08109679,
		"etb": 136.23995171,
		"etc": 0.055247874,
		"eth": 0.0003698031,
		"eur": 0.87796507,
		"eurc": 0.8760782,
		"fei": 1.00442648,
		"fil": 0.3813737,
		"fim": 5.22014328,
		"fjd": 2.24885373,
		"fkp": 0.73949964,
		"flow": 2.60502089,
		"flr": 53.59677259,
		"frax": 0.34683387,
		"frf": 5.75907336,
		"ftt": 1.01712924,
		"gala": 57.61735538,
		"gbp": 0.73949964,
		"gel": 2.72849993,
		"ggp": 0.73949964,
		"ghc": 103218.03416713,
		"ghs": 10.32180342,
		"gip": 0.73949964,
		"gmd": 72.11804097,
		"gmx": 0.058193609,
		"gnf": 8666.11057602,
		"gno": 0.0079120581,
		"grd": 299.16659895,
		"grt": 10.20181753,
		"gt": 0.053814596,
		"gtq": 7.68566698,
		"gusd": 1.00053877,
		"gyd": 209.84833358,
		"hbar": 5.59159448,
		"hkd": 7.84791158,
		"hnl": 26.06529834,
		"hnt": 0.33641513,
		"hot": 980.54224444,
		"hrk": 6.61502785,
		"ht": 3.36341229,
		"htg": 131.18769272,
		"huf": 353.24030316,
		"icp": 0.16342931,
		"idr": 16285.36347978,
		"iep": 0.69145369,
		"ils": 3.48702485,
		"imp": 0.73949964,
		"imx": 1.85332976,
		"inj": 0.072844601,
		"inr": 85.64103153,
		"iqd": 1311.39750248,
		"irr": 42107.44030645,
		"isk": 126.42226864,
		"itl": 1699.97743372,
		"jep": 0.73949964,
		"jmd": 159.69382952,
		"jod": 0.709,
		"jpy": 145.19145283,
		"kas": 11.10536106,
		"kava": 2.19475114,
		"kcs": 0.088103625,
		"kda": 1.9354472,
		"kes": 129.33057279,
		"kgs": 87.47878021,
		"khr": 4031.80488681,
		"klay": 7.24110772,
		"kmf": 431.93050201,
		"knc": 2.79322205,
		"kpw": 899.91982493,
		"krw": 1360.2554208,
		"ksm": 0.05941459,
		"kwd": 0.30612824,
		"kyd": 0.83142891,
		"kzt": 509.32623494,
		"lak": 21613.13002384,
		"lbp": 90157.79862345,
		"ldo": 1.12653441,
		"leo": 0.11004999,
		"link": 0.068551928,
		"lkr": 299.11167555,
		"lrc": 11.13575698,
		"lrd": 199.08624725,
		"lsl": 17.74981129,
		"ltc": 0.010951541,
		"ltl": 3.03143781,
		"luf": 35.41702329,
		"luna": 5.95514625,
		"lunc": 16258.48582668,
		"lvl": 0.61703385,
		"lyd": 5.45012991,
		"mad": 9.16551367,
		"mana": 3.39071827,
		"mbx": 4.93558759,
		"mdl": 17.25582256,
		"mga": 4493.14677598,
		"mgf": 22465.73387989,
		"mina": 4.79958463,
		"mkd": 53.92418278,
		"mkr": 0.00049849813,
		"mmk": 2099.35098236,
		"mnt": 3578.03475873,
		"mop": 8.08334892,
		"mro": 396.6172355,
		"mru": 39.66172355,
		"mtl": 0.37691041,
		"mur": 45.72825313,
		"mvr": 15.44145827,
		"mwk": 1736.13315158,
		"mxn": 19.06498609,
		"mxv": 2.24818204,
		"myr": 4.23384697,
		"mzm": 63882.41913874,
		"mzn": 63.88241914,
		"nad": 17.74981129,
		"near": 0.39102229,
		"neo": 0.15820413,
		"nexo": 0.79684012,
		"nft": 2354823.96673363,
		"ngn": 1557.95525929,
		"nio": 36.80137155,
		"nlg": 1.93478041,
		"nok": 10.08944187,
		"npr": 137.08988121,
		"nzd": 1.65854442,
		"okb": 0.018908001,
		"omr": 0.38474415,
		"one": 79.49714352,
		"op": 1.50830608,
		"ordi": 0.10876791,
		"pab": 1,
		"paxg": 0.00030076703,
		"pen": 3.63364443,
		"pepe": 79368.0793116,
		"pgk": 4.16942023,
		"php": 55.77123919,
		"pkr": 282.2326759,
		"pln": 3.75092205,
		"pol": 4.5526292,
		"pte": 176.01619395,
		"pyg": 7979.86220254,
		"qar": 3.64,
		"qnt": 0.0081840747,
		"qtum": 0.45089434,
		"rol": 44273.81327924,
		"ron": 4.42738133,
		"rpl": 0.17210814,
		"rsd": 102.90049529,
		"rub": 79.04318593,
		"rune": 0.57477511,
		"rvn": 44.46803032,
		"rwf": 1439.05263812,
		"sand": 3.39432276,
		"sar": 3.75,
		"sbd": 8.50891055,
		"scr": 14.58151095,
		"sdd": 60046.53563992,
		"sdg": 600.4653564,
		"sek": 9.61879005,
		"sgd": 1.28840623,
		"shib": 76412.37065149,
		"shp": 0.73949964,
		"sit": 210.39555032,
		"skk": 26.44957582,
		"sle": 21.90897188,
		"sll": 21908.97188165,
		"snx": 1.45072456,
		"sol": 0.0062502291,
		"sos": 571.35984404,
		"spl": 0.16666667,
		"srd": 36.8098716,
		"srg": 36809.87159827,
		"std": 21695.93930412,
		"stn": 21.6959393,
		"stx": 1.43887499,
		"sui": 0.29328922,
		"svc": 8.75,
		"syp": 13001.15909068,
		"szl": 17.74981129,
		"thb": 32.75333684,
		"theta": 1.245269,
		"tjs": 9.90945284,
		"tmm": 17549.30135436,
		"tmt": 3.50986027,
		"tnd": 2.95558982,
		"ton": 0.30105662,
		"top": 2.40686837,
		"trl": 39298952.71220931,
		"trx": 3.48161317,
		"try": 39.29895271,
		"ttd": 6.78231308,
		"tusd": 1.00294493,
		"tvd": 1.53763113,
		"twd": 29.93512618,
		"twt": 1.22114662,
		"tzs": 2638.21351585,
		"uah": 41.52733611,
		"ugx": 3621.32791859,
		"uni": 0.13985015,
		"usd": 1,
		"usdc": 0.99630375,
		"usdd": 1.00040632,
		"usdp": 1.00215463,
		"usdt": 1.00047204,
		"uyu": 41.53850332,
		"uzs": 12756.21778001,
		"val": 1699.97743372,
		"veb": 9897914932.100445,
		"ved": 98.98106201,
		"vef": 9898106.20143605,
		"ves": 98.98106201,
		"vet": 39.41763778,
		"vnd": 26040.70723472,
		"vuv": 119.98680667,
		"waves": 0.89738722,
		"wemix": 2.3373095,
		"woo": 11.87371186,
		"wst": 2.63774053,
		"xaf": 575.90733601,
		"xag": 0.027475977,
		"xau": 0.0003023897,
		"xaut": 0.00030235003,
		"xbt": 0.0000091255,
		"xcd": 2.70678014,
		"xcg": 1.80260469,
		"xch": 0.089153901,
		"xdc": 16.41898845,
		"xdr": 0.73624145,
		"xec": 44750.91960648,
		"xem": 146.2483562,
		"xlm": 3.61916134,
		"xmr": 0.0029992265,
		"xof": 575.90733601,
		"xpd": 0.0009306411,
		"xpf": 104.7691019,
		"xpt": 0.0008283566,
		"xrp": 0.43265036,
		"xtz": 1.66971927,
		"yer": 243.40259087,
		"zar": 17.74981129,
		"zec": 0.019572255,
		"zil": 81.66904964,
		"zmk": 24970.9755497,
		"zmw": 24.97097555,
		"zwd": 361.9,
		"zwg": 26.95699385,
		"zwl": 67358.09289222
	}
}

async function fetchcurrency() {
	check = 1
	if (inp1.value) {
		denomination1 = inp1.value.toLowerCase()
	}
	if (valuea.value) {
		value1 = valuea.value
		value1 = parseFloat(value1)
	}

	if (inp2.value) {
		denomination2 = inp2.value.toLowerCase()
	}
	if (valueb.value) {
		value2 = valueb.value
		value2 = parseFloat(value2)
	}

	if (inp1.value && inp2.value && !valuea.value && valueb.value) {
		url = `https://latest.currency-api.pages.dev/v1/currencies/${denomination2}.json`
		// answer = tempanswer
		require = await fetch(url)
		answer = await require.json()
		console.log(answer[denomination1])
	}
	else if (inp1.value && inp2.value && valuea.value && !valueb.value) {
		url = `https://latest.currency-api.pages.dev/v1/currencies/${denomination1}.json`
		// answer = tempanswer
		require = await fetch(url)
		answer = await require.json()
		console.log(answer[denomination1])
	}
	else {
		answer = 0
	}
	setTimeout(() => {
		check = 0
	}, 5000);

}

function processcurrency() {

	if (answer && answer != 0) {
		if (!inp1.value || !inp2.value) {
			date = new Date()
			solution = 'UnFound'
		}
		else if (inp1.value && inp2.value && valuea.value && valueb.value) {
			date = new Date()
			solution = '2 Found'
		}
		else if (inp1.value && inp2.value && !valuea.value && valueb.value) {
			date = answer.date
			second = answer[denomination2][denomination1]
			second = parseFloat(second)
			solution = parseFloat(second) * parseFloat(value2)
			valuea.value = solution
			value1 = valuea.value
			value1 = parseFloat(value1)
		}
		else if (inp1.value && inp2.value && valuea.value && !valueb.value) {
			date = answer.date
			second = answer[denomination1][denomination2]
			second = parseFloat(second)
			solution = parseFloat(second) * parseFloat(value1)
			valueb.value = solution
			value2 = valueb.value
		    value2 = parseFloat(value2)
		}
		else 
		{
			date = new Date()
			solution = 'Not Found'
		}
		denomination1 = denomination1.toUpperCase()
		denomination2 = denomination2.toUpperCase()
	}
	else {
		date = new Date()
		solution = 'Not Found'
		denomination1 = denomination1.toUpperCase()
		denomination2 = denomination2.toUpperCase()
	}

}

function dispcurrency() {
	content.innerHTMl = ``
	if (solution == '2 Found') {
		result = `<b><div class="second">
						<p class="font2">Please Fill Amount for Only 1 Currency </p>
				</div></b>`
	}
	else if (solution == 'UnFound') {
		result = `<b><div class="second">
						<p class="font2">Please Enter 2 Currency Denominations</p>
				</div></b>`
	}
	else if (answer && answer != 0 ) {
		result = `  <b><div class="first">
		<p class="font4">Date : ${date}</p>
		<p class="font3">${value1} ${denomination1} = ${value2} ${denomination2}</p>
		</div></b>`
	}

	else if (solution == 'Not Found') {
		result = `<b><div class="second">
                        <p class="font2">Result Not Found. Please Fill Valid Entries</p>
                </div></b>`
	}


	content.innerHTML = result
	answer = 0
}



async function process() {
	await fetchcurrency()
	processcurrency()
	dispcurrency()
}


inpbutton.addEventListener("click", () => {
	console.log("run once")
	process()
})

// setInterval(() => {
// 	if (check == 0) {
// 		if (first && valuea.value != first) {
// 			valueb.value = ''
// 		}
// 		first = valuea.value

// 		if (second && valueb.value != second) {
// 			valuea.value = ''
// 		}
// 		second = valueb.value
// 	}
// }, 200);