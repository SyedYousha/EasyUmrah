// Duas for each of the 7 rounds (shawt) of Tawaaf.
// Paragraphs within a dua are separated by a blank line (\n\n).
// Fill in `urdu` later — it will show when the user selects the Urdu toggle.

// Recited between the Yemeni Corner (Rukn Yamani) and the Black Stone
// (Hajr-e-Aswad) on every round of tawaaf.
const YEMENI_CORNER_DUA = {
  arabic: `اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ رَبَّنَآ اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَّفِي الْآخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ ، وَاَدْخِلْنَا الْجَنَّةَ مَعَ الْاَبْرَارِ يَا عَزِيْزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِيْنَ .`,
  english: `O Allah! Truly I ask You for pardon and well-being in this world and in the Hereafter. Our Lord! Grant us good in this world and good in the Hereafter, and save us from the punishment of the Fire, and admit us to Paradise with the righteous. O Mighty One, O All-Forgiving, O Lord of the Worlds.`,
  urdu: `اے اللہ میں آپ سے دنیا اور آخرت کی بھلائی اور معافی چاہتا ہوں، اے ہمارے رب ہم کو دنیا اور آخرت کی بھلائی عطا فرما اور جہنم کے عذاب سے ہم کو بچالے اور جنت میں نیک لوگوں کے ساتھ ہم کو داخل فرما، تو بڑا غالب اور بڑا بخشش کرنے والا، اے دونوں جہاں کے پالنہار۔`
};

const TAWAAF_DUAS = [
  {
    round: 1,
    arabic: `سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا اِلَهَ اِلَّا اللَّهُ وَاللَّهُ اَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيْمِ ، وَالصَّلٰوةُ وَالسَّلَامُ عَلَى رَسُوْلِ اللَّهِ ﷺ ، اَللّٰهُمَّ اِيْمَانًا بِكَ وَتَصْدِيْقًا بِكَلِمَاتِكَ وَوَفَاءً بِعَهْدِكَ وَاِتِّبَاعًا لِسُنَّتِ نَبِيِّكَ وَحَبِيْبِكَ سَيِّدِنَا مُحَمَّدٍ ﷺ .

اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ الْعَفْوَ وَالْعَافِيَةَ وَالْمُعَافَاةَ الدَّائِمَةَ فِي الدِّيْنِ وَالدُّنْيَا وَالْآخِرَةِ وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ .`,
    english: `Glory be to Allah, and Praise be to Allah. There is no god but Allah. Allah is the Greatest. There is no power nor strength except by Allah, The Exalted, The Great. Peace and blessings be upon the Messenger of Allah ﷺ. O Allah! By my faith in Thee, and by my belief in Thy Words, and in fulfillment of the vows I made to Thee, and following the sunnah of Thy Prophet and Thy beloved, our Master Muhammad ﷺ. O Allah! Truly I ask Thee for pardon, well-being, and everlasting soundness in faith, in this world and in the Hereafter, and for success in Paradise and deliverance from the Fire.`,
    urdu: `اللہ کی ذات ہر عیب سے پاک ہے اور ہر تعریف اللہ کے لئے ہے، اللہ کے سوا کوئی عبادت کے لائق نہیں، اللہ بہت بڑا ہے، اس کی مدد کے بغیر گناہوں سے بچا نہیں جاسکتا، اور اسی کی مدد سے عبادت پر قدرت ہوتی ہے، اللہ بہت بڑا ہے اور بہت بڑی عظمت والا ہے، حضور صلی اللہ علیہ وسلم پر درود و سلام نازل ہو، اے اللہ ہم تجھ پر ایمان لانے کی حالت میں اور تیرے کلمات کی تصدیق کرکے اور عہد کو پورا کرتے ہوئے اور تیرے نبی کی سنت کی اتباع میں طواف کرتے ہیں۔

اے اللہ بیشک میں تجھ سے عفو اور سلامتی کا سوال کرتا ہوں، اور دین اور دنیا اور آخرت میں دائمی درگزر اور حصول جنت اور جہنم سے نجات کے ساتھ کامیابی کی درخواست کرتا ہوں۔`
  },
  {
    round: 2,
    arabic: `اَللّٰهُمَّ اِنَّ هٰذَا الْبَيْتَ بَيْتُكَ وَالْحَرَمَ حَرَمُكَ وَالْاَمْنَ اَمْنُكَ وَالْعَبْدَ عَبْدُكَ وَاَنَا عَبْدُكَ وَابْنُ عَبْدِكَ وَهٰذَا مَقَامُ الْعَائِذِ بِكَ مِنَ النَّارِ ، فَحَرِّمْ لُحُوْمَنَا وَبَشَرَتَنَا عَلَى النَّارِ ، اَللّٰهُمَّ حَبِّبْ اِلَيْنَا الْاِيْمَانَ وَزَيِّنْهُ فِيْ قُلُوْبِنَا وَكَرِّهْ اِلَيْنَا الْكُفْرَ وَالْفُسُوْقَ وَالْعِصْيَانَ وَاجْعَلْنَا مِنَ الرَّاشِدِيْنَ .

اَللّٰهُمَّ قِنِيْ عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ .

اَللّٰهُمَّ ارْزُقْنِيْ جَنَّتَكَ بِغَيْرِ حِسَابٍ .`,
    english: `O Allah! Truly this House is Your House, this Sanctuary is Your Sanctuary, this Security is Your Security, and the slave is Your slave. I am Your slave and the son of Your slave. This is the station of one seeking refuge with You from the Fire. So forbid our flesh and our skin to the Fire. O Allah! Endear the faith to us and beautify it in our hearts, and make hateful to us disbelief, wickedness, and disobedience, and make us among the rightly-guided. O Allah! Protect me from Your punishment on the Day You resurrect Your slaves. O Allah! Grant me Your Paradise without any reckoning.`,
    urdu: `اے اللہ یہ تیرا ہی گھر ہے، حرم تیرا ہی حرم ہے، یہاں کا امن و امان تیرا ہی قائم کیا ہوا ہے، اور ہر بندہ تیرا ہی بندہ ہے، اور میں بھی تیرا ہی بندہ ہوں اور تیرا ہی بندہ زادہ ہوں، یہ مقام تیری مدد سے جہنم کی آگ سے پناہ اور حفاظت کا ہے، پس ہمارے گوشت اور چمڑے کو جہنم پر حرام کر دے۔ اے اللہ ہمیں ایمان کی محبت عطا فرما، اور ہمارے دلوں کو ایمان کے نور سے منور کر دے اور کفر و فسق سے ہمیں نفرت عطا فرما اور ہم کو ہدایت یافتہ لوگوں میں شامل فرما۔

اے اللہ مجھ کو قیامت کے دن کے عذاب سے بچا، جس دن تو اپنے بندوں کو دوبارہ زندہ فرمائیگا۔

اے اللہ ہم کو بغیر حساب کتاب جنت عطا فرما۔`
  },
  {
    round: 3,
    arabic: `اَللّٰهُمَّ اِنِّيْ اَعُوْذُبِكَ مِنَ الشَّكِ وَالشِّرْكِ وَالشِّقَاقِ وَالنِّفَاقِ وَسُوْءِ الْاَخْلَاقِ وَسُوْءِ الْمَنْظَرِ وَالْمُنْقَلَبِ فِي الْمَالِ وَالْاَهْلِ وَالْوَلَدِ .

اَللّٰهُمَّ اِنِّيْ اَعُوْذُبِكَ مِنْ فِتْنَةِ الْقَبْرِ ، وَاَعُوْذُبِكَ مِنْ فِتْنَةِ الْمَحْيَاءِ وَالْمَمَاتِ وَاَعُوْذُبِكَ مِنَ الْخِزْيِ فِي الدُّنْيَا وَالْآخِرَةِ .`,
    english: `O Allah! Truly I seek refuge in You from doubt, from shirk, from discord, from hypocrisy, from evil character, from evil appearance, and from an evil return in wealth, family, and children. O Allah! I seek refuge in You from the trial of the grave, and I seek refuge in You from the trial of life and death, and I seek refuge in You from disgrace in this world and in the Hereafter.`,
    urdu: `اے اللہ میں تیرے دین اور احکام میں شک کرنے سے پناہ مانگتا ہوں، میں پناہ مانگتا ہوں کسی کو تیرا ہمسر بنانے سے اور تیرے احکام کی مخالفت کرنے سے اور نفاق سے، سوء اخلاق سے، بری چیز دیکھنے سے، اور پناہ مانگتا ہوں مال، اہل و عیال اور اولاد کی تبدیلی سے۔

اے اللہ میں قبر کے فتنے سے، تیرے دربار میں پناہ مانگتا ہوں، اور زندگی اور سکرات موت کی سختیوں سے پناہ مانگتا ہوں، اور دنیا اور آخرت کی رسوائی سے میں تیری پناہ چاہتا ہوں۔`
  },
  {
    round: 4,
    arabic: `اَللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُوْرًا وَسَعْيًا مَشْكُوْرًا وَذَنْبًا مَغْفُوْرًا وَعَمَلًا صَالِحًا مَقْبُوْلًا وَتِجَارَةً لَنْ تَبُوْرَ يَا عَلِيْمُ مَا فِي الصُّدُوْرِ اَخْرِجْنِيْ يَآ اَللّٰهُ مِنَ الظُّلُمَاتِ اِلَى النُّوْرِ .

اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ مُوْجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ وَالسَّلَامَةَ مِنْ كُلِّ اِثْمٍ وَالْغَنِيْمَةَ مِنْ كُلِّ بِرٍّ وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ .

رَبِّ قَنِّعْنِيْ بِمَا رَزَقْتَنِيْ وَبَارِكْ لِيْ فِيْمَا اَعْطَيْتَنِيْ وَاخْلُفْ عَلٰى كُلِّ غَائِبَةٍ لِيْ مِنْكَ بِخَيْرٍ .`,
    english: `O Allah! Make this an accepted Hajj, an endeavor that is rewarded, a sin forgiven, a righteous deed accepted, and a trade that will never perish. O You who knows what is in the hearts! Bring me out, O Allah, from the darknesses into the light. O Allah! Truly I ask You for what necessitates Your mercy and what confirms Your forgiveness, and safety from every sin, gain from every act of righteousness, success in Paradise, and deliverance from the Fire. My Lord! Make me content with what You have provided me, bless me in what You have given me, and be a good replacement for me in every good thing that is absent from me.`,
    urdu: `اے اللہ میرے اس حج کو حج مبرور اور رج مقبول بنا، اور میری اس کوشش کو ٹھکانے پر لگا، اور میرے گناہوں کی بخشش فرما، اور میرے اس عمل کو قبول ترین عمل صالح بنا، اور اس کو ایسی تجارت بنا جس میں کوئی گھاٹا نہ ہو، اے دلوں کی باتوں کے جاننے والے، اے اللہ مجھ کو تاریکی سے نکال کر اجالے میں داخل فرما۔

اے اللہ بیشک میں تیری رحمت کے حصول کے ذرائع اور تیری بخش کے راستے اور گناہ سے سلامتی کی التماس کرتا ہوں اور ہر نیکی پر قائم رہنے اور جنت کی کامیابی اور جہنم سے نجات کی التماس کرتا ہوں۔

اے میرے رب اس روزی پر قناعت عطا فرما جو تو نے مجھے دی ہے، اور مجھے برکت عطا فرما ان چیزوں میں جو تو نے مجھے عطا فرمائی ہیں، اور تو خیر کے ساتھ میری ہر اس چیز کا نگہبان بن جا، جو مجھ سے غائب ہے۔`
  },
  {
    round: 5,
    arabic: `اَللّٰهُمَّ اَظِلَّنِيْ تَحْتَ ظِلِّ عَرْشِكَ يَوْمَ لَا ظِلَّ اِلَّا ظِلُّ عَرْشِكَ وَلَا بَاقِيَ اِلَّا وَجْهَكَ ، وَاسْقِنِيْ مِنْ حَوْضِ نَبِيِّكَ سَيِّدِنَا مُحَمَّدٍ ﷺ شَرْبَةً هَنِيْئَةً مَرِيْئَةً لَا نَظْمَاُ بَعْدَهَا اَبَدًا .

اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ مِنْ خَيْرِ مَا سَاَلَكَ مِنْهُ نَبِيُّكَ سَيِّدُنَا مُحَمَّدٌ ﷺ وَاَعُوْذُبِكَ مِنْ شَرِّ مَا اسْتَعَاذَكَ مِنْهُ نَبِيُّكَ سَيِّدُنَا مُحَمَّدٌ ﷺ وَاَنْتَ الْمُسْتَعَانُ وَعَلَيْكَ الْبَلٰغُ وَلَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاللّٰهِ .

اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ الْجَنَّةَ وَنَعِيْمَهَا وَمَا يُقَرِّبُنِيْ اِلَيْهَا مِنْ قَوْلٍ اَوْ فِعْلٍ اَوْ عَمَلٍ وَاَعُوْذُبِكَ مِنَ النَّارِ ، وَمَا يُقَرِّبُنِيْ اِلَى النَّارِ مِنْ قَوْلٍ اَوْ فِعْلٍ اَوْ عَمَلٍ .`,
    english: `O Allah! Shade me under the shade of Your Throne on the Day when there is no shade except the shade of Your Throne and no one remains except Your Face. Give me to drink from the pond of Your Prophet, our Master Muhammad ﷺ, a drink so pleasant and refreshing that I will never thirst afterwards. O Allah! I ask You for the best of what Your Prophet, our Master Muhammad ﷺ, asked of You, and I seek refuge in You from the worst of what Your Prophet, our Master Muhammad ﷺ, sought refuge in You from. You are the One from whom help is sought, and upon You is the delivery, and there is no might nor power except by Allah. O Allah! Truly I ask You for Paradise and its delights, and whatever brings me closer to it in word, act, or deed. And I seek refuge in You from the Fire, and whatever brings me closer to the Fire in word, act, or deed.`,
    urdu: `اے اللہ جس دن تیرے عرش کے سایہ کے علاوہ کوئی سایہ نہ ہوگا، اس دن مجھے عرش کے سایہ کے نیچے جگہ عطا فرما، اور تیری ذات کے علاوہ کوئی باقی رہنے والا نہیں ہے، اور مجھ کو اپنے نبی صلی اللہ علیہ وسلم کے حوض سے سیراب کر دے اور ایسا خوش ذائقہ پانی پلا دے جس کے بعد پھر پیاس نہ لگے۔

اے اللہ میں تجھ سے ہر اس چیز کا سوال کرتا ہوں جس کا تیرے نبی محمد صلی اللہ علیہ وسلم نے سوال کیا تھا، اور میں ہر اس چیز کے شر سے پناہ مانگتا ہوں، جس سے تیرے نبی محمد صلی اللہ علیہ وسلم نے پناہ مانگی ہے، اور تو ہی مددگار اور تو ہی کافی ہے اور اللہ کی مدد کے بغیر معصیت سے حفاظت اور عبادت پر قدرت نہیں ہو سکتی۔

اے اللہ بیشک میں تجھ سے جنت اور اس کی نعمتوں کا سوال کرتا ہوں اور اس چیز کا سوال کرتا ہوں جو قول، فعل اور عمل میں سے جو مجھے جنت میں پہنچا دے، اور میں جہنم کے عذاب سے پناہ مانگتا ہوں اور قول فعل اور عمل میں سے ہر اس چیز سے پناہ مانگتا ہوں جو مجھ کو جہنم سے قریب کر دے۔`
  },
  {
    round: 6,
    arabic: `اَللّٰهُمَّ اِنَّ لَكَ عَلَيَّ حُقُوْقًا كَثِيْرَةً فِيْمَا بَيْنِيْ وَبَيْنَكَ ، وَحُقُوْقًا كَثِيْرَةً فِيْمَا بَيْنِيْ وَبَيْنَ خَلْقِكَ ، اَللّٰهُمَّ مَا كَانَ لَكَ مِنْهَا فَاغْفِرْهُ لِيْ وَمَا كَانَ لِخَلْقِكَ فَتَحَمَّلْهُ عَنِّيْ وَاَغْنِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ وَبِفَضْلِكَ عَمَّنْ سِوَاكَ يَا وَاسِعَ الْمَغْفِرَةِ .

اَللّٰهُمَّ اِنَّ بَيْتَكَ عَظِيْمٌ وَوَجْهَكَ كَرِيْمٌ وَاَنْتَ يَا اَللّٰهُ حَلِيْمٌ كَرِيْمٌ عَظِيْمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّيْ .`,
    english: `O Allah! You have upon me many rights in what is between me and You, and many rights in what is between me and Your creation. O Allah! Whatever of them is Yours, forgive me for it; and whatever is for Your creation, bear it on my behalf. Enrich me with what is lawful of Yours so I have no need of what You have forbidden, and with obedience to You so I have no need of disobedience, and with Your grace so I have no need of anyone but You, O You whose forgiveness is vast. O Allah! Truly Your House is great, and Your Countenance is noble, and You, O Allah, are Forbearing, Noble, and Great. You love pardon, so pardon me.`,
    urdu: `اے اللہ بیشک تیرے میرے اوپر بیشمار حقوق ہیں جو تیرے اور میرے درمیان میں ہیں، اور بے شمار حقوق میرے اور تیری مخلوق کے درمیان میں ہیں، اے اللہ ان میں سے جو حقوق تیرے ہیں تو معاف فرما دے، اور جو تیری مخلوق کے ہیں ان کا اپنی مخلوق سے بخشوانے کی ذمہ داری لے، اور مجھ کو حلال کمائی کی توفیق عطا فرما اور حرام سے حفاظت فرما، اے اللہ تیری اطاعت کے ذریعہ سے معصیت سے حفاظت اور تیرے فضل سے غیروں کے محتاج بننے اور احسان مند ہونے سے حفاظت فرما، اے بہت زیادہ بخشنے والے۔

اے اللہ بیشک تیرا گھر بڑی عظمت والا ہے، اور تیری ذات کرم والی ہے، اے اللہ تو بڑا بار بار کرم والا ہے اور عظمت والا ہے، معاف کرنے کو تو پسند فرماتا ہے لہذا مجھے معاف کر دے۔`
  },
  {
    round: 7,
    arabic: `اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ اِيْمَانًا كَامِلًا وَيَقِيْنًا صَادِقًا وَرِزْقًا وَاسِعًا وَقَلْبًا خَاشِعًا وَلِسَانًا ذَاكِرًا وَحَلَالًا طَيِّبًا وَتَوْبَةً نَصُوْحًا وَتَوْبَةً قَبْلَ الْمَوْتِ وَرَاحَةً عِنْدَ الْمَوْتِ وَمَغْفِرَةً وَرَحْمَةً بَعْدَ الْمَوْتِ وَالْعَفْوَ عِنْدَ الْحِسَابِ وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ بِرَحْمَتِكَ يَا عَزِيْزُ يَا غَفَّارُ ، رَبِّ زِدْنِيْ عِلْمًا وَاَلْحِقْنِيْ بِالصَّالِحِيْنَ .`,
    english: `O Allah! Truly I ask You for perfect faith, sincere certainty, ample provision, a heart that is humble, a tongue that remembers You, lawful and wholesome sustenance, sincere repentance, repentance before death, comfort at the time of death, forgiveness and mercy after death, pardon at the reckoning, success in Paradise, and deliverance from the Fire — by Your mercy, O Mighty One, O All-Forgiving. My Lord! Increase me in knowledge and join me with the righteous.`,
    urdu: `اے اللہ بیشک میں آپ سے کامل ایمان اور سچا یقین اور وسیع رزق کا سوال کرتا ہوں، اور خشوع کرنے والا دل اور ذکر کرنے والی زبان، پاک حلال کمائی، اور سچی توبہ اور مرنے سے پہلے توبہ کی توفیق، اور موت کے وقت آسانی، اور مرنے کے بعد مغفرت اور رحمت، اور حساب و کتاب کے وقت معافی اور درگزر، اور جنت کی کامیابی، اور جہنم سے تیری رحمت سے نجات چاہتا ہوں، اے بڑے غالب اور بڑی بخشش کرنے والے، اے میرے رب میرے علم میں اضافہ کر، اور مجھ کو آخرت میں نیک لوگوں کے ساتھ شامل فرما۔`
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { TAWAAF_DUAS, YEMENI_CORNER_DUA };
}
