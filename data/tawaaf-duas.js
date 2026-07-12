// Duas for each of the 7 rounds (shawt) of Tawaaf.
// Paragraphs within a dua are separated by a blank line (\n\n).
// Fill in `urdu` later — it will show when the user selects the Urdu toggle.

// Recited between the Yemeni Corner (Rukn Yamani) and the Black Stone
// (Hajr-e-Aswad) on every round of tawaaf.
const YEMENI_CORNER_DUA = {
  arabic: `رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ، وَأدْخِلْنَا الْجَنَّةَ مَعَ الْأبْرَاَرِ ، يَا عَزِيرُ يَا غَفَّارُ ، يَا رَبَّ الْعَالَمِينَ .`,
  english: `Our Lord! Grant us good in this world and good in the Hereafter, and save us from the chastisement of fire, and allow us to enter Paradise with the righteous ones. O Glorious One! O All Forgiving! O Lord of the Universe!`,
  urdu: ""
};

const TAWAAF_DUAS = [
  {
    round: 1,
    arabic: `سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا اِلَهَ اِلَّا اللَّهُ وَاللَّهُ اَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيْمِ ، وَالصَّلٰوةُ وَالسَّلَامُ عَلَى رَسُوْلِ اللَّهِ ﷺ ، اَللّٰهُمَّ اِيْمَانًا بِكَ وَتَصْدِيْقًا بِكَلِمَاتِكَ وَوَفَاءً بِعَهْدِكَ وَاِتِّبَاعًا لِسُنَّتِ نَبِيِّكَ وَحَبِيْبِكَ سَيِّدِنَا مُحَمَّدٍ ﷺ .

اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ الْعَفْوَ وَالْعَافِيَةَ وَالْمُعَافَاةَ الدَّائِمَةَ فِي الدِّيْنِ وَالدُّنْيَا وَالْآخِرَةِ وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ .`,
    english: `Glory be to Allah, and Praise be to Allah. There is no god but Allah. Allah is the Greatest. There is no power nor strength except by Allah, The Exalted, The Great. Peace and blessings be upon the Messenger of Allah ﷺ. O Allah! By my faith in Thee, and by my belief in Thy Words, and in fulfillment of the vows I made to Thee, and following the sunnah of Thy Prophet and Thy beloved, our Master Muhammad ﷺ. O Allah! Truly I ask Thee for pardon, well-being, and everlasting soundness in faith, in this world and in the Hereafter, and for success in Paradise and deliverance from the Fire.`,
    urdu: ""
  },
  {
    round: 2,
    arabic: `اَللّٰهُمَّ اِنَّ هٰذَا الْبَيْتَ بَيْتُكَ وَالْحَرَمَ حَرَمُكَ وَالْاَمْنَ اَمْنُكَ وَالْعَبْدَ عَبْدُكَ وَاَنَا عَبْدُكَ وَابْنُ عَبْدِكَ وَهٰذَا مَقَامُ الْعَائِذِ بِكَ مِنَ النَّارِ ، فَحَرِّمْ لُحُوْمَنَا وَبَشَرَتَنَا عَلَى النَّارِ ، اَللّٰهُمَّ حَبِّبْ اِلَيْنَا الْاِيْمَانَ وَزَيِّنْهُ فِيْ قُلُوْبِنَا وَكَرِّهْ اِلَيْنَا الْكُفْرَ وَالْفُسُوْقَ وَالْعِصْيَانَ وَاجْعَلْنَا مِنَ الرَّاشِدِيْنَ .

اَللّٰهُمَّ قِنِيْ عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ .

اَللّٰهُمَّ ارْزُقْنِيْ جَنَّتَكَ بِغَيْرِ حِسَابٍ .`,
    english: `O Allah! Truly this House is Your House, this Sanctuary is Your Sanctuary, this Security is Your Security, and the slave is Your slave. I am Your slave and the son of Your slave. This is the station of one seeking refuge with You from the Fire. So forbid our flesh and our skin to the Fire. O Allah! Endear the faith to us and beautify it in our hearts, and make hateful to us disbelief, wickedness, and disobedience, and make us among the rightly-guided. O Allah! Protect me from Your punishment on the Day You resurrect Your slaves. O Allah! Grant me Your Paradise without any reckoning.`,
    urdu: ""
  },
  {
    round: 3,
    arabic: `اَللّٰهُمَّ اِنِّيْ اَعُوْذُبِكَ مِنَ الشَّكِ وَالشِّرْكِ وَالشِّقَاقِ وَالنِّفَاقِ وَسُوْءِ الْاَخْلَاقِ وَسُوْءِ الْمَنْظَرِ وَالْمُنْقَلَبِ فِي الْمَالِ وَالْاَهْلِ وَالْوَلَدِ .

اَللّٰهُمَّ اِنِّيْ اَعُوْذُبِكَ مِنْ فِتْنَةِ الْقَبْرِ ، وَاَعُوْذُبِكَ مِنْ فِتْنَةِ الْمَحْيَاءِ وَالْمَمَاتِ وَاَعُوْذُبِكَ مِنَ الْخِزْيِ فِي الدُّنْيَا وَالْآخِرَةِ .`,
    english: `O Allah! Truly I seek refuge in You from doubt, from shirk, from discord, from hypocrisy, from evil character, from evil appearance, and from an evil return in wealth, family, and children. O Allah! I seek refuge in You from the trial of the grave, and I seek refuge in You from the trial of life and death, and I seek refuge in You from disgrace in this world and in the Hereafter.`,
    urdu: ""
  },
  {
    round: 4,
    arabic: `اَللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُوْرًا وَسَعْيًا مَشْكُوْرًا وَذَنْبًا مَغْفُوْرًا وَعَمَلًا صَالِحًا مَقْبُوْلًا وَتِجَارَةً لَنْ تَبُوْرَ يَا عَلِيْمُ مَا فِي الصُّدُوْرِ اَخْرِجْنِيْ يَآ اَللّٰهُ مِنَ الظُّلُمَاتِ اِلَى النُّوْرِ .

اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ مُوْجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ وَالسَّلَامَةَ مِنْ كُلِّ اِثْمٍ وَالْغَنِيْمَةَ مِنْ كُلِّ بِرٍّ وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ .

رَبِّ قَنِّعْنِيْ بِمَا رَزَقْتَنِيْ وَبَارِكْ لِيْ فِيْمَا اَعْطَيْتَنِيْ وَاخْلُفْ عَلٰى كُلِّ غَائِبَةٍ لِيْ مِنْكَ بِخَيْرٍ .`,
    english: `O Allah! Make this an accepted Hajj, an endeavor that is rewarded, a sin forgiven, a righteous deed accepted, and a trade that will never perish. O You who knows what is in the hearts! Bring me out, O Allah, from the darknesses into the light. O Allah! Truly I ask You for what necessitates Your mercy and what confirms Your forgiveness, and safety from every sin, gain from every act of righteousness, success in Paradise, and deliverance from the Fire. My Lord! Make me content with what You have provided me, bless me in what You have given me, and be a good replacement for me in every good thing that is absent from me.`,
    urdu: ""
  },
  {
    round: 5,
    arabic: `اَللّٰهُمَّ اَظِلَّنِيْ تَحْتَ ظِلِّ عَرْشِكَ يَوْمَ لَا ظِلَّ اِلَّا ظِلُّ عَرْشِكَ وَلَا بَاقِيَ اِلَّا وَجْهَكَ ، وَاسْقِنِيْ مِنْ حَوْضِ نَبِيِّكَ سَيِّدِنَا مُحَمَّدٍ ﷺ شَرْبَةً هَنِيْئَةً مَرِيْئَةً لَا نَظْمَاُ بَعْدَهَا اَبَدًا .

اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ مِنْ خَيْرِ مَا سَاَلَكَ مِنْهُ نَبِيُّكَ سَيِّدُنَا مُحَمَّدٌ ﷺ وَاَعُوْذُبِكَ مِنْ شَرِّ مَا اسْتَعَاذَكَ مِنْهُ نَبِيُّكَ سَيِّدُنَا مُحَمَّدٌ ﷺ وَاَنْتَ الْمُسْتَعَانُ وَعَلَيْكَ الْبَلٰغُ وَلَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاللّٰهِ .

اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ الْجَنَّةَ وَنَعِيْمَهَا وَمَا يُقَرِّبُنِيْ اِلَيْهَا مِنْ قَوْلٍ اَوْ فِعْلٍ اَوْ عَمَلٍ وَاَعُوْذُبِكَ مِنَ النَّارِ ، وَمَا يُقَرِّبُنِيْ اِلَى النَّارِ مِنْ قَوْلٍ اَوْ فِعْلٍ اَوْ عَمَلٍ .`,
    english: `O Allah! Shade me under the shade of Your Throne on the Day when there is no shade except the shade of Your Throne and no one remains except Your Face. Give me to drink from the pond of Your Prophet, our Master Muhammad ﷺ, a drink so pleasant and refreshing that I will never thirst afterwards. O Allah! I ask You for the best of what Your Prophet, our Master Muhammad ﷺ, asked of You, and I seek refuge in You from the worst of what Your Prophet, our Master Muhammad ﷺ, sought refuge in You from. You are the One from whom help is sought, and upon You is the delivery, and there is no might nor power except by Allah. O Allah! Truly I ask You for Paradise and its delights, and whatever brings me closer to it in word, act, or deed. And I seek refuge in You from the Fire, and whatever brings me closer to the Fire in word, act, or deed.`,
    urdu: ""
  },
  {
    round: 6,
    arabic: `اَللّٰهُمَّ اِنَّ لَكَ عَلَيَّ حُقُوْقًا كَثِيْرَةً فِيْمَا بَيْنِيْ وَبَيْنَكَ ، وَحُقُوْقًا كَثِيْرَةً فِيْمَا بَيْنِيْ وَبَيْنَ خَلْقِكَ ، اَللّٰهُمَّ مَا كَانَ لَكَ مِنْهَا فَاغْفِرْهُ لِيْ وَمَا كَانَ لِخَلْقِكَ فَتَحَمَّلْهُ عَنِّيْ وَاَغْنِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ وَبِفَضْلِكَ عَمَّنْ سِوَاكَ يَا وَاسِعَ الْمَغْفِرَةِ .

اَللّٰهُمَّ اِنَّ بَيْتَكَ عَظِيْمٌ وَوَجْهَكَ كَرِيْمٌ وَاَنْتَ يَا اَللّٰهُ حَلِيْمٌ كَرِيْمٌ عَظِيْمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّيْ .`,
    english: `O Allah! You have upon me many rights in what is between me and You, and many rights in what is between me and Your creation. O Allah! Whatever of them is Yours, forgive me for it; and whatever is for Your creation, bear it on my behalf. Enrich me with what is lawful of Yours so I have no need of what You have forbidden, and with obedience to You so I have no need of disobedience, and with Your grace so I have no need of anyone but You, O You whose forgiveness is vast. O Allah! Truly Your House is great, and Your Countenance is noble, and You, O Allah, are Forbearing, Noble, and Great. You love pardon, so pardon me.`,
    urdu: ""
  },
  {
    round: 7,
    arabic: `اَللّٰهُمَّ اِنِّيْ اَسْئَلُكَ اِيْمَانًا كَامِلًا وَيَقِيْنًا صَادِقًا وَرِزْقًا وَاسِعًا وَقَلْبًا خَاشِعًا وَلِسَانًا ذَاكِرًا وَحَلَالًا طَيِّبًا وَتَوْبَةً نَصُوْحًا وَتَوْبَةً قَبْلَ الْمَوْتِ وَرَاحَةً عِنْدَ الْمَوْتِ وَمَغْفِرَةً وَرَحْمَةً بَعْدَ الْمَوْتِ وَالْعَفْوَ عِنْدَ الْحِسَابِ وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ بِرَحْمَتِكَ يَا عَزِيْزُ يَا غَفَّارُ ، رَبِّ زِدْنِيْ عِلْمًا وَاَلْحِقْنِيْ بِالصَّالِحِيْنَ .`,
    english: `O Allah! Truly I ask You for perfect faith, sincere certainty, ample provision, a heart that is humble, a tongue that remembers You, lawful and wholesome sustenance, sincere repentance, repentance before death, comfort at the time of death, forgiveness and mercy after death, pardon at the reckoning, success in Paradise, and deliverance from the Fire — by Your mercy, O Mighty One, O All-Forgiving. My Lord! Increase me in knowledge and join me with the righteous.`,
    urdu: ""
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { TAWAAF_DUAS, YEMENI_CORNER_DUA };
}
