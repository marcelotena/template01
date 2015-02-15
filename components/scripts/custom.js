
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


jQuery(function($) {

    /*==========================================
    CUSTOM SCRIPTS
    =====================================================*/

    // CUSTOM LINKS SCROLLING FUNCTION 

    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                return false;
            }
        }
    });

    /*==========================================
  PARALLAX SCRIPTS
   =====================================================*/

    
    $('.parallax').scrolly({ bgParallax: true });

    /*==========================================
    WRITE  YOUR  SCRIPTS BELOW
    =====================================================*/
	$(function(){
		$("#galeria-fotos").elastic_grid({
		'filterEffect': '<a href="http://www.jqueryscript.net/tags.php?/moveup/">moveup</a>', // moveup, scaleup, fallperspective, fly, flip, helix , popup
		'hoverDirection': true,
		'hoverDelay': 0,
		'hoverInverse': false,
		'expandingSpeed': 500,
		'expandingHeight': 500,
		'items' :
		[
		{
		'title' : 'Taules fixes de coworking',
		'description'   : 'Un espai per treballar a gust i deixar les teves coses amb total tranquil•litat.<br><br>La Taula Gran Fixe ofereix la possibilitat de ser compartida per només 50€ més, així que entre dos Coworkers pagaríeu 199€/mes. <br><br>Taula Gran Fixa: 149€/mes<br>Taula Petita Fixa: 129€/mes<br><br>Day Pass: 10€/persona',
		'thumbnail' : ['assets/img/espai/small1.jpg'],
		'large' : ['assets/img/espai/large1.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Taules flex',
		'description'   : 'Les taules pels Coworkers més inquiets. Amb un horari de 9h a 19h per treballar i amb un espai on deixar les coses si vols que te les guardem. <br><br>Gaudiràs de la llum natural que entra per la claraboia de la sala. <br><br>99€/mes<br><br>Day Pass: 10€/persona',
		'thumbnail' : ['assets/img/espai/small6.jpg'],
		'large' : ['assets/img/espai/large6.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Sala polivalent',
		'description'   : "Aquesta Sala ens permet fer les activitats per la millora de les habilitats professionals i el foment del Coworking. Fem anglès, xerrades, cafè networking... <br><br>També hi ha possibilitat de llogar-la per 25€/h i poder fer la teva activitat. <br><br>Tenim de tot: TV, Wi-Fi, Taules, Cadires, Nevera, Pissarra, Llum Natural...",
		'thumbnail' : ['assets/img/espai/small5.jpg'],
		'large' : ['assets/img/espai/large5.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Entrada del local i sala de reunions',
		'description'   : "Només entrar rebràs una calorosa benvinguda. A la imatge pots veure que tenim una sala de reunions separada de la resta del Coworking per tal d'oferir l'espai necessari per poder reunir-te amb total tranquil•litat.",
		'thumbnail' : ['assets/img/espai/small7.jpg'],
		'large' : ['assets/img/espai/large7.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Sala de reunions',
		'description'   : 'Amb capacitat per a 6 persones la Sala de Reunions està equipada amb el necessari per fer reunions. <br><br>Si no ets Coworker però la vols llogar, ho pots fer per només 10€/h. <br><br>És important que ens aviseu quan la voleu utilitzar per saber si està disponible. <br><br>Els Coworkers la poden utilitzar sempre que vulguin.',
		'thumbnail' : ['assets/img/espai/small8.jpg'],
		'large' : ['assets/img/espai/large8.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'La terrassa',
		'description'   : 'Espai perfecte per desconnectar un moment, xerrar amb els altres coworkers o simplement fer un cafè. <br><br>Els esmorzars en aquest petit racó donen energia per tot el dia.',
		'thumbnail' : ['assets/img/espai/small3.jpg'],
		'large' : ['assets/img/espai/large3.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Office',
		'description'   : 'Aquí trobaràs tot el necessari per preparar el teu menjar, fer-te un café i netejar els tuppers. <br><br>Entre els Coworkers compartim estones de dinar, tenim detalls com pastissets o pica pica i a vegades el 7dos convida a una cervesa.',
		'thumbnail' : ['assets/img/espai/small4.jpg'],
		'large' : ['assets/img/espai/large4.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Zona chill-out',
		'description'   : 'Al 7dos també tens a la teva disposició una zona per descansar i desconnectar, per poder tornar #ambganes al teu projecte.',
		'thumbnail' : ['assets/img/espai/small2.jpg'],
		'large' : ['assets/img/espai/large2.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		}
		 
		]
		});
		});

});