const testInput1 = 
`mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
trh fvjkl sbzzf mxmxvkd (contains dairy)
sqjhc fvjkl (contains soy)
sqjhc mxmxvkd sbzzf (contains fish)`;

const realInput = 
`cdblnb txts scljtv dsvl ksdgk zbkbgp jflb gxhc chjx rnptcf hpvzlb hxxb gcc rrbk lzpcq dpk rmrmhb clbqr jvpsllhl lbvgfq lhgkrc kmjvr dbkz pctjm mxd nqkggbpq dtpkz vjbmbz hk ljkdr nvbrx bgzm xplz flxvrh qxmrqb zlc bgqg rvvcm dskjpq dgms xzb bhzqc xbhmf jrfzs jbvhl xzgst nkn lrhtp khqsk gtjhr grkrz mvbxt lkrnkm qsbsr bcpgx hplt jdcvff cdqrg pgnpx ttmr (contains dairy, sesame)
hdfrg rvvcm kqpbzn ksj dcgpsq bgzm rrbk dsvl pctjm dbkz rmbk cdblnb spfzpm ckptp rzvpm gdhpvgz vjbmbz jmtzqjs rzpdmp khqsk jbmq ttmr nkn xhqsl hk nqkggbpq lhgkrc vhhj srmsh xrvhc glpmssg bhzqc snjbct vcfxs flxvrh zbkbgp jzdhlj dgms drfgh hplt zstptg kjdrd zcxfj lzpcq qnzljfj cjgm krllr vzsjm mdzbsft cljq xhdq hdkc fhmgrhg zxtgf pgnpx nvbrx mxd qsbsr vvcnht msfxp pnhrz scnlb tjm skxd nhqtzkn lmn ksdgk zkkxgzm crfvzpt tvdqr xplz cdqrg xzb llfdjz xtzhq (contains wheat, dairy)
kjdrd gcllv rckbqrc ffssl fxlbcb ztvfvhz nvbrx vgbl dskjpq rtvgv hmqhpzr pgnpx jvpsllhl xzb srmsh glpmssg cdqrg vjbmbz hk zcxfj lrnxgns ttmr dgms tvdqr rzvpm lrhtp hplt kmjvr dzdgl khqsk lhgkrc zbkbgp jrfzs gxhc lbvgfq txts zkkxgzm tjfgc cljq cdblnb gpzq spfzpm hxxb jphll zxtgf qpnt krllr (contains soy, sesame, peanuts)
jvljzbh sbjnrn jvpsllhl ktlttm msfxp hk sxmsxx jdcvff mvbxt dzdgl xtzhq blkh hdfrg flxvrh rmrmhb vgh jflb zbkbgp xhqsl nvbrx cbshx ksdgk srmsh pgnpx kmjvr dgms bzjmn fnsjrp ndnq nkn dskjpq ljkdr xzb bgqg fzmzs nsgpf zcxfj cljq vcfxs gcc jtq htk krllr dcgpsq gpzq pclzcd (contains wheat)
jf jzdhlj scljtv fzhvcz ltxf lkrnkm zkkxgzm xnhgg ttmr lrnxgns xzgst cdqrg pgnpx vgh nvbrx pctjm qvqf sbjnrn ckptp zbkbgp dskjpq hk dgms mxd khqsk qxpmkdp tjm smjk kqpbzn fhhcv bcchptf pgxzdxf gpzq glpmssg pnhrz xplz mvbxt xzb bgqg gcj msfxp ksdgk jvrn flxvrh jlpzn ksj vxqrj vzsjm xbngqsv nsgpf rvvcm ktlttm xrvhc qnmt gcllv jdcvff (contains wheat, dairy, soy)
xbngqsv smtthp khqsk cdqrg bcchptf fhhcv jmrdr jdcvff skkn jf tvdqr jtq glpmssg jlpzn gcc qxmrqb sbtkm pdmg xzb ztvfvhz zbkbgp dgms zstptg txts flxvrh scnlb spnzjj pgnpx mcmr vgbl lqb krllr rnptcf hmqhpzr gdvts srmsh gdhpvgz lzpcq skxd ltxf ksdgk mvbxt dskjpq (contains fish, peanuts)
jzdhlj mcmr hdfrg ksdgk dskjpq kcck lzpcq fhmgrhg tlfjpc srmsh tjfgc msfxp pclzcd chjx zkkxgzm khqsk frsvq jlpzn nvbrx cvv cdblnb txts lqb skxd mdzbsft kmjvr pgnpx hpvzlb hdkc sklm zcxfj kkggp nql ktlttm tvdqr lrhtp jdcvff scljtv blkh jflb mhzdz rtvgv nsgpf xzb fzmzs (contains fish, eggs, shellfish)
mdzbsft khqsk bzjmn xzb lmhqv skxd jdcvff pgnpx msfxp xplz mcmr nqkggbpq spfzpm zcxfj lbvlp ktlttm mhzdz vgh hmqhpzr fhhcv jtq ksdgk sklm jffhm ztvfvhz lrnxgns qxpmkdp jlpzn sbtkm sbjnrn jvljzbh cljq tjm ljkdr clbqr ckptp cvv bgzm skkn zstptg jbmq pdmg gcllv vzsjm crfvzpt hk cprbsmpx llfdjz kkggp pnhrz qrvdjvg rzpdmp nvbrx lkrnkm zbkbgp scljtv mvbxt fxlbcb srmsh (contains shellfish, dairy, soy)
rckbqrc mcmr nql grkrz cljq hplt blkh hdkc fnsjrp pchzb tvdqr jmrdr dcgpsq hk qrvdjvg xqxgx cvv spnzjj xzb scnlb zcxfj nhqtzkn rzvpm jdcvff gpzq pdmg qsbsr zlc ztvfvhz lmn htk frsvq ksdgk jffhm ndnq mxd vvcnht qxpmkdp jbmq ktlttm zdjcvfc jvpsllhl nkn crlzb llfdjz kpcv hdfrg xplz xnhgg ksj nvbrx hpvzlb gdvts jmtzqjs snjbct pgxzdxf dtpkz zbkbgp sbtkm zstptg kcck zkkxgzm srmsh chjx jphll tjm lrhtp vcfxs khqsk msfxp bcchptf dskjpq hmqhpzr crfvzpt rrbk rtvgv dpk jflb gcc jbvhl flxvrh nqkggbpq ljkdr smtthp cjgm txts kqpbzn kkggp (contains peanuts)
skxd tjfgc tvtsbxb zbkbgp jrfzs gpzq gcc lqb kkggp rmrmhb kjdrd spfzpm blkh xnhgg kmjvr qnmt qvqf jdcvff cjgm gcj gcllv vhhj nvbrx srmsh sbjnrn jmtzqjs crfvzpt ksdgk glpmssg zstptg dskjpq flxvrh qnzljfj dgms bgzm rrbk gbtss txts scnlb clbqr xzb jphll khqsk dzdgl xrmx lmn (contains eggs, wheat)
rmbk glpmssg hdfrg lmhqv vgbl lkrnkm ztvfvhz dcgpsq vxqrj kkggp bcchptf dpk hxxb ksdgk jdcvff llfdjz crlzb fzhvcz ksj lrhtp gbtss qxpmkdp pgxzdxf zbkbgp tvdqr nvbrx rnptcf khqsk vcfxs gpzq ltxf rckbqrc nqkggbpq ktlttm vrssb ttmr krllr bhzqc mdzbsft mxd pknvxsb jvpsllhl jmtzqjs zvth nql bgzm qnmt msfxp vhhj bgqg sbjnrn zstptg jrfzs djjk spfzpm srmsh snjbct dskjpq kjdrd pgnpx jf cljq qxmrqb tzbrg jflb cdblnb rzvpm hplt (contains sesame)
jbvhl dcgpsq bgqg lbvlp ksdgk jmtzqjs sklm gpzq thfqk hk jmrdr srmsh ffssl qsbsr dskjpq jvljzbh nhqtzkn nvbrx clbqr rzvpm jffhm dbkz hdkc crfvzpt jphll sbtkm zbkbgp kkggp nql zstptg cbshx qnmt ltxf tnjnr msfxp vxqrj gxhc bcpgx mxd blkh vjbmbz xqxgx bgzm chjx glpmssg skxd pgxzdxf pgnpx jzdhlj sbjnrn vgh vgbl xrmx zkkxgzm xzb pknvxsb (contains eggs)
qrvdjvg vjbmbz hplt ksdgk flxvrh mlvdvc llfdjz ktlttm mxd xzb kcck pctjm cdblnb km ksj bcchptf zcxfj jbmq pgnpx cprbsmpx jbvhl xhdq hdfrg xbhmf gtjhr gdvts bgqg vzsjm msfxp lqx jf gcllv ckptp scljtv zdjcvfc nkn lzpcq tjfgc mvbxt lrnxgns rzpdmp frsvq xrvhc zkkxgzm nqkggbpq dtpkz srmsh jtq djjk cljq gxhc bgzm zbkbgp tvtsbxb sxmsxx qxpmkdp pgxzdxf khqsk sbtkm jvrn dskjpq (contains dairy)
cdblnb tvdqr nqkggbpq jvljzbh tjfgc cpzzfpz hdfrg lzpcq dskjpq ksdgk vvcnht xhdq vgh dgms xnhgg tjm jf krllr frsvq vcfxs ztvfvhz bgzm rzpdmp jtq crfvzpt grkrz qnzljfj gcllv gbtss pgnpx gtjhr srmsh zstptg qnmt cdqrg cprbsmpx rrbk bhzqc km lbvgfq kqpbzn bgqg xplz zvth mxd djjk pchzb hxxb hk qrvdjvg ljkdr vzsjm xqxgx khqsk dtpkz rmrmhb qvqf pclzcd vrssb pctjm stfmsqc ffssl lbvlp fjqlm gxhc sbtkm dpk flxvrh jmtzqjs lrnxgns skxd jbmq xzb nvbrx (contains dairy)
htk xrvhc pgxzdxf scljtv scnlb rrbk jmrdr ksdgk ttmr pclzcd drfgh hk jrfzs dgms ljkdr mcmr lzpcq vnrmm zbkbgp llfdjz vhhj jtq vzsjm skxd ndnq lmn bcpgx nkn dbkz sxmsxx cdblnb pdmg kttg jvpsllhl srmsh qxmrqb spnzjj djjk snjbct dskjpq zkkxgzm lqx gdhpvgz pnhrz xbngqsv qnmt fzmzs sbjnrn xlchb thfqk pgnpx khqsk spfzpm nvbrx (contains eggs, peanuts, fish)
thfqk txts vcfxs pchzb dskjpq tvtsbxb jrfzs xlchb zcxfj rzpdmp zbkbgp smtthp lmhqv zxtgf xnhgg qrvdjvg ckptp htk ktlttm nvbrx srmsh cdqrg hk khqsk jlpzn fhhcv xbhmf vhhj cjgm rckbqrc dgms nql vjbmbz sbtkm bhzqc crlzb xhqsl jzdhlj xhdq jphll lhgkrc mcnzq pgnpx gdhpvgz xzb (contains shellfish)
pgnpx tzbrg mcmr kmjvr ksj zcxfj sbtkm fnsjrp scnlb nql pgxzdxf bzjmn jvpsllhl xrvhc fzmzs jvrn xhqsl vhhj lrhtp cjgm dpk rmbk xzb pchzb rzvpm xzgst nqkggbpq gcllv xbhmf drfgh hmqhpzr zxtgf jzdhlj xnhgg pclzcd cdqrg gdhpvgz khqsk km jphll ltxf rckbqrc rnptcf vgh hplt hxxb nvbrx qnmt jmtzqjs skxd qnzljfj crfvzpt fxlbcb bgqg rzpdmp srmsh chjx ljkdr htk mdzbsft crlzb txts pctjm vrssb dskjpq jvljzbh gpzq pnhrz xhdq ztvfvhz qxpmkdp lbvlp gcc sxmsxx spfzpm mxd cprbsmpx tvtsbxb kttg zvth krllr frsvq pdmg llfdjz ksdgk (contains sesame, shellfish)
hk jvrn bcpgx ndnq cdblnb pknvxsb zvth gdhpvgz vgbl khqsk jrfzs jphll jffhm bgzm drfgh tvtsbxb skkn dskjpq ksdgk kjdrd hdfrg jbmq kcck xrvhc zkkxgzm kttg qrvdjvg ksj dbkz srmsh dsvl gcllv fnsjrp vgh rrbk fhmgrhg lqx nvbrx zdjcvfc pgnpx qnzljfj xzb scnlb rzpdmp (contains eggs)
dtpkz jlpzn vjbmbz xzgst hplt mvbxt pclzcd kmjvr lmhqv jflb zbkbgp rzpdmp pdmg dskjpq qxpmkdp zdjcvfc xnhgg jtq fhhcv zkkxgzm bcchptf nvbrx khqsk tlfjpc xqxgx blkh lbvlp jbmq fjqlm fxlbcb djjk xplz ksdgk dpk pnhrz jvrn tjfgc tzbrg pchzb xzb xbhmf tvtsbxb kjdrd rckbqrc gdhpvgz srmsh (contains fish, shellfish)
mcnzq skkn pgnpx hplt rzpdmp jbvhl crfvzpt qnzljfj dpk srmsh lzpcq jzdhlj pdmg mhzdz fnsjrp hxxb jffhm krllr vnrmm vvcnht bgzm clbqr khqsk vgbl jvpsllhl xrvhc stfmsqc msfxp bcchptf xqxgx glpmssg djjk tjfgc cprbsmpx jmrdr nvbrx xbngqsv pgxzdxf lrnxgns chjx pclzcd jdcvff rckbqrc rmbk lhgkrc gbtss fxlbcb zvth nqkggbpq frsvq crlzb xplz xnhgg pknvxsb zbkbgp blkh jvrn dskjpq sklm cvv nsgpf ksj rrbk nhqtzkn ffssl ksdgk qxmrqb lkrnkm mcmr (contains eggs)
sbtkm pnhrz jmrdr pchzb tnjnr grkrz skxd dsvl hdfrg rtvgv rnptcf crfvzpt dskjpq bhzqc jvpsllhl xlchb nhqtzkn llfdjz msfxp cjgm vgh tjfgc xzb nsgpf zxtgf scnlb tzbrg frsvq jflb drfgh lrnxgns cdblnb hdkc mcmr stfmsqc pgxzdxf jphll fhhcv rmbk mlvdvc gcj mcnzq ksdgk lbvlp fhmgrhg tjm rzvpm qnzljfj pgnpx lmn qvqf nvbrx vjbmbz xhdq zbkbgp djjk hxxb ksj fxlbcb jffhm dcgpsq lhgkrc cljq kmjvr chjx jbvhl snjbct smjk ktlttm khqsk (contains peanuts)
lzpcq jzdhlj gcllv jvpsllhl kttg kjdrd jvrn nvbrx cljq hplt jphll lrnxgns bgqg msfxp pdmg gxhc jf smtthp gcj gdvts clbqr xrvhc ztvfvhz qsbsr lqx pgnpx hdfrg cvv zstptg jtq scljtv rzpdmp khqsk zbkbgp vxqrj dskjpq rmrmhb bgzm bcchptf jmtzqjs krllr llfdjz ndnq fhmgrhg djjk cdqrg lmhqv rckbqrc zdjcvfc xnhgg gdhpvgz qnmt lmn jlpzn skxd xzb mxd cprbsmpx ksj mlvdvc jdcvff pgxzdxf gbtss chjx vvcnht jbmq spnzjj drfgh vcfxs pctjm zcxfj ttmr jflb flxvrh hk pclzcd ksdgk cpzzfpz ljkdr xplz (contains shellfish, soy)
pgnpx jvrn jbvhl jflb jffhm mcmr rvvcm qnmt lrnxgns txts jrfzs skkn sxmsxx kpcv bhzqc htk khqsk ltxf fhhcv blkh xplz mcnzq cpzzfpz fhmgrhg dcgpsq ksdgk jmtzqjs xzb gcllv lrhtp cjgm qqzqd mxd hpvzlb kqpbzn gdvts zcxfj bgqg rmrmhb srmsh jphll bcpgx xtzhq krllr jmrdr zbkbgp nvbrx ljkdr lqb smjk gtjhr bcchptf tjfgc dsvl kjdrd (contains shellfish, wheat)
kkggp bzjmn jvrn kcck smjk stfmsqc grkrz blkh vgh zdjcvfc xbhmf lhgkrc gxhc nhqtzkn xplz khqsk gdvts lzpcq zbkbgp jrfzs km vvcnht dskjpq xzgst zcxfj dtpkz lqb dsvl qqzqd jdcvff srmsh lrhtp rtvgv nsgpf rvvcm nqkggbpq gbtss fxlbcb pgnpx crlzb xqxgx vnrmm llfdjz qsbsr xzb flxvrh sbjnrn mcmr mvbxt scnlb nvbrx tzbrg lmn vgbl dzdgl qnmt qxmrqb ksj kttg gcj nkn cdqrg kmjvr pdmg fhhcv spnzjj glpmssg bcpgx qpnt ztvfvhz cpzzfpz mdzbsft rzvpm rmbk vcfxs lqx jflb (contains soy, shellfish, sesame)
lhgkrc djjk dskjpq pctjm xzb srmsh tvtsbxb sbjnrn smtthp drfgh lqb fzhvcz txts gxhc ksdgk khqsk jmtzqjs fjqlm lqx hxxb cvv spnzjj tjm vgbl qvqf kjdrd zbkbgp mvbxt dcgpsq cjgm msfxp rtvgv thfqk llfdjz mcmr ckptp lbvlp lbvgfq pgnpx zstptg mhzdz dtpkz spfzpm jffhm vgh qsbsr lrhtp ttmr pgxzdxf vhhj ksj rnptcf skkn nsgpf xhdq pknvxsb stfmsqc hdfrg gcj gcllv ffssl gtjhr nhqtzkn fhmgrhg rmrmhb ljkdr mcnzq bzjmn lkrnkm crlzb frsvq xbhmf dbkz qxmrqb hpvzlb jbvhl zlc vjbmbz mxd bhzqc kcck ztvfvhz (contains peanuts, shellfish, wheat)
rrbk mcnzq sxmsxx qnmt blkh smtthp skxd hpvzlb vvcnht qxpmkdp ltxf srmsh cpzzfpz gtjhr bcchptf lmhqv mvbxt rmbk fjqlm jflb msfxp pdmg xhdq qxmrqb lrhtp dzdgl fhmgrhg skkn zbkbgp ktlttm bgqg llfdjz khqsk vrssb zcxfj hdfrg bcpgx pgnpx ndnq vxqrj lqb hmqhpzr xrmx jmtzqjs dcgpsq nvbrx mhzdz gcc hk xbngqsv ksdgk dgms scnlb ckptp mlvdvc kcck krllr vgh ffssl djjk xzb thfqk jmrdr nql lqx lbvgfq jvrn dbkz jbvhl txts (contains dairy, fish)
ksdgk nsgpf ksj bgqg dpk dskjpq pclzcd fnsjrp vjbmbz kttg sbjnrn tjfgc jbvhl fhhcv pchzb hplt vnrmm ljkdr kqpbzn skkn jzdhlj txts chjx khqsk kpcv bzjmn pgnpx srmsh rzvpm ttmr cljq nql rnptcf hdfrg ndnq kcck kjdrd qsbsr gpzq nqkggbpq rmbk ffssl pknvxsb zdjcvfc crlzb pctjm smtthp mvbxt tnjnr thfqk nvbrx xzb xtzhq scljtv (contains shellfish, sesame, peanuts)
tvtsbxb qnmt vgbl srmsh xbngqsv kpcv ckptp xtzhq mhzdz smtthp fjqlm fzmzs bgqg qsbsr fhhcv cjgm qxmrqb krllr xhqsl msfxp qpnt nqkggbpq vnrmm lmn spnzjj zbkbgp cdqrg blkh mcnzq gdhpvgz skkn thfqk dzdgl qnzljfj jrfzs jphll ffssl jvpsllhl ksdgk fzhvcz pgnpx lhgkrc xnhgg pclzcd xplz cprbsmpx lzpcq rnptcf pnhrz qrvdjvg hxxb kttg jffhm jbvhl cdblnb lqb hplt rtvgv nvbrx rrbk grkrz dtpkz dskjpq skxd hk bgzm jvljzbh vvcnht ndnq gbtss pdmg lbvlp lmhqv frsvq lkrnkm rzpdmp xbhmf zxtgf gxhc khqsk sbtkm gcj vhhj clbqr vzsjm sbjnrn (contains fish, sesame, dairy)
smjk zxtgf tzbrg gxhc fxlbcb xrmx gdhpvgz ndnq flxvrh gcj cdqrg qxpmkdp cprbsmpx kpcv dsvl fhmgrhg nvbrx jdcvff jvpsllhl pchzb drfgh dskjpq lmhqv tjm srmsh jflb vcfxs nql zlc jphll ltxf vhhj pgxzdxf frsvq dpk vnrmm xhdq vxqrj kkggp fhhcv rvvcm pnhrz ttmr txts bcpgx km skkn qqzqd cbshx qrvdjvg qnmt rmrmhb lrhtp jmtzqjs vrssb mdzbsft xqxgx xzb pgnpx zbkbgp ksdgk krllr dbkz lqx bcchptf jlpzn lzpcq lqb htk tjfgc (contains wheat)
mhzdz nvbrx bhzqc kjdrd vxqrj zstptg zkkxgzm bgzm jvpsllhl ttmr nhqtzkn vvcnht sbjnrn lrnxgns mdzbsft qvqf scnlb pgnpx gdhpvgz gbtss gcj lbvlp cljq gcllv smtthp scljtv rrbk cdblnb ksdgk pctjm tjfgc xzb sxmsxx sklm mvbxt mcmr hdfrg khqsk xbhmf dskjpq tvdqr jrfzs lkrnkm frsvq drfgh srmsh xqxgx zxtgf xhqsl jflb nqkggbpq qpnt fhmgrhg vzsjm tnjnr gxhc lmn rvvcm jzdhlj rzvpm xnhgg gdvts dcgpsq hplt (contains wheat)
fzhvcz jvljzbh sxmsxx vxqrj grkrz lmn clbqr spnzjj qnmt xbngqsv dcgpsq pgnpx lmhqv jtq lzpcq xzgst xrvhc lhgkrc zkkxgzm hmqhpzr qxpmkdp gdvts ttmr dgms gxhc xzb ckptp sbjnrn rmbk nsgpf tjfgc ksdgk hxxb zdjcvfc jvpsllhl fnsjrp fxlbcb vjbmbz jzdhlj mcmr vhhj qpnt jdcvff lrhtp jmrdr khqsk kttg thfqk hk nqkggbpq jf scnlb dskjpq zcxfj zbkbgp crlzb ksj spfzpm gtjhr lkrnkm bcchptf mlvdvc gcc mvbxt crfvzpt ztvfvhz km qvqf mxd rrbk djjk skxd jmtzqjs srmsh bhzqc vnrmm bcpgx dzdgl kjdrd (contains eggs, shellfish, fish)
pknvxsb gdhpvgz xlchb fhhcv jffhm xtzhq hk lrhtp vgh htk rtvgv mhzdz zvth scljtv gtjhr kttg lbvgfq khqsk lhgkrc fxlbcb lkrnkm crfvzpt cdqrg ttmr bgqg zxtgf tlfjpc hdkc srmsh ztvfvhz nvbrx qxmrqb qpnt tvdqr fnsjrp mdzbsft ckptp smjk zbkbgp vcfxs mcnzq ndnq nqkggbpq nhqtzkn gbtss xzb rzvpm kcck clbqr gcc mlvdvc dsvl jvljzbh xzgst rmbk sbtkm jphll pgnpx bcchptf kpcv dskjpq zdjcvfc llfdjz zkkxgzm kkggp hplt gdvts sbjnrn dcgpsq hmqhpzr cjgm vxqrj nsgpf qqzqd rrbk bcpgx dgms pdmg jvpsllhl hdfrg jmrdr (contains eggs, wheat)
qnzljfj rckbqrc srmsh kcck nvbrx ltxf qrvdjvg xrvhc kttg bcchptf rmrmhb xzb sxmsxx jbmq xtzhq pdmg pnhrz pknvxsb vgbl gpzq gcllv qqzqd jvljzbh kkggp hxxb cbshx vzsjm ztvfvhz rtvgv gtjhr bgzm vgh jdcvff pgnpx xplz ffssl dskjpq nhqtzkn dtpkz sbtkm dsvl pctjm lzpcq mcnzq zbkbgp rzpdmp grkrz scljtv tvtsbxb cljq qsbsr hplt nqkggbpq jffhm ksj khqsk gdhpvgz tzbrg cjgm bcpgx dgms hmqhpzr xrmx xhqsl (contains eggs)
mvbxt jbmq sklm gcj jmrdr scnlb gtjhr gxhc fjqlm sbjnrn jzdhlj rmrmhb lhgkrc jflb xtzhq dskjpq jvljzbh lbvgfq ksdgk dbkz zxtgf dtpkz qrvdjvg lbvlp dzdgl qxpmkdp gdhpvgz gpzq hplt bhzqc xhqsl lrnxgns xrvhc rnptcf bzjmn mdzbsft mcnzq clbqr mxd xzgst txts vjbmbz fxlbcb zvth pdmg srmsh hk skkn tjm pgxzdxf bgzm zkkxgzm xzb xbhmf blkh smtthp lmhqv khqsk jdcvff xrmx fhmgrhg bcpgx mlvdvc tzbrg kmjvr scljtv dsvl rvvcm vvcnht jvrn ndnq grkrz zbkbgp pctjm jbvhl crlzb xbngqsv ckptp llfdjz pknvxsb nvbrx mcmr xplz rzvpm (contains soy, shellfish, peanuts)`;

const init = (input) => {
    // make a dummy array where each item is [[ingredients], [allergens]]
    let inputArr = input
        .split('\n')
        .map(food => {
            let ingredients = food.slice(0, food.indexOf('(') - 1).split(' ');
            let allergens = food
                .slice(food.indexOf('contains') + 9, -1)
                .split(', ');
            return [ingredients, allergens];
        });
    // convert dummy to map.  key = allergen.  value = possible ingredients array
    let res = new Map();
    inputArr.forEach(food => {
        food[1].forEach(allergen => {
            if (res.has(allergen)) {
                // set that key to be the intersection of the ingredients sets
                res.set(allergen, intersection(res.get(allergen), food[0]));
            } else {
                res.set(allergen, food[0]);
            }
        });
    });
    return res;
};

const intersection = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item));
};

// returns a Set of all ingredients.
const getAllIngredients = (input) => {
    let res = new Set();
    let inArr = input
        .split('\n')
        .map(food => food.slice(0, food.indexOf('(') - 1))
        .join(' ')
        .split(' ');
    inArr.forEach(ingredient => res.add(ingredient));
    return res;
};

// m is a map from the init function above.
const solveAllergenMap = (m) => {
    let mArr = Array.from(m);
    let solveMap = new Map();
    while (mArr.length > 0) {
        // find an allergen with only one ingredient mapped to it.
        let single = mArr.find(allergen => allergen[1].length === 1);
        let singleIndex = mArr.findIndex(allergen => allergen[1].length === 1);
        // add that soln. to the solveMap.
        solveMap.set(single[0], single[1][0]);
        // remove that item from mArr.
        mArr.splice(singleIndex, 1);
        // remove that ingredient from all other lists in mArr.
        for (let food of mArr) {
            let index = food[1].indexOf(single[1][0]);
            if (index >= 0) {
                food[1].splice(index, 1);
            }
        }
    }
    return solveMap;
};


const getSafeIngredients = (ingredientsSet, m) => {
    let iset = new Set(ingredientsSet);
    allergenMap.forEach((ingredients, allergen) => {
        ingredients.forEach(ingredient => {
            iset.delete(ingredient);
        });
    });
    return iset;
};

const numAppearances = (ingredientsSet, input) => {
    // each element is [[ingredients], [allergens]]
    let inputArr = input
        .split('\n')
        .map(food => {
            let ingredients = food.slice(0, food.indexOf('(') - 1).split(' ');
            let allergens = food
                .slice(food.indexOf('contains') + 9, -1)
                .split(', ');
            return [ingredients, allergens];
        });
    let count = 0;

    for (const food of inputArr) {
        for (const ingredient of food[0]) {
            if (ingredientsSet.has(ingredient)) count++;
        }
    }
    return count;
};

const getCanonical = (sMap) => {
    let res = '';
    let a = Array.from(sMap).sort((a,b) => a[0] < b[0] ? -1 : 1);
    for (const food of a) {
        res += food[1] + ',';
    }
    return res;
};

let allergenMap = init(realInput);
let allIngredients = getAllIngredients(realInput, allergenMap);
let solvedMap = solveAllergenMap(allergenMap);
let safeIngredients = getSafeIngredients(allIngredients, solvedMap);
let n = numAppearances(safeIngredients, realInput);
console.log(n);

// part 2
console.log(getCanonical(solvedMap));
debugger;