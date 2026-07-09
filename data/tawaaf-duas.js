// Duas for each of the 7 rounds (shawt) of Tawaaf.
// Paragraphs within a dua are separated by a blank line (\n\n).
// Fill in `urdu` later — it will show when the user selects the Urdu toggle.

const TAWAAF_DUAS = [
  {
    round: 1,
    arabic: `سُبْحَانَ اللّهِ ، والْحَمْدُللّهِ ، وَ لا اِلهَ اِلَّا اللّهُ ، وَ اللّهُ اَكْبَرُ ، وَ لا حَوْلَ وَ لا قُوَّةَ اِلَّا بِاللّهِ الْعَلِىَّ الْعَضِيِم ، وَ الْصَّلِاةُ وَ السَّلَامُ عَلَى رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. اَللَّهُمَّ إِيْمَانًا بِكَ ، وَتَصْدِيقًا لِكِتَابِكَ ، وَ وَفَاءً بِعَهْدِكَ ، وَ اْتِّبَاعًا لِسُنَّتِهِ نَبِيِّكَ وَ حَبِيبِكَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ.

اَللَّهُمَّ إِنِّى أَسْأَلُكَ الْعَفْوَ وَ الْعَافِيَةَ ، وَ الْمُعَافَاةَ الدَّائِمَةَ فِى الدِّينِ وَ الدُّنْيَا وَ اَلْآخِرَةِ ، وَ الْفَوْزَ بِالْجَنَّةِ ، وَ النَّجَاةِ مِنَ النَّارِ

رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ، وَأدْخِلْنَا الْجَنَّةَ مَعَ الْأبْرَاَرِ ، يَا عَزِيرُ يَا غَفَّارُ ، يَا رَبَّ الْعَالَمِينَ.`,
    english: `Glory be to Allah, and Praise be to Him. There is no God but Allah. Allah is the Greatest. There is no power nor strength except that granted by Allah. Peace and blessings be upon the messenger of Allah. O Allah! By my faith in Thee, and by my belief in Thy Book, and in fulfillment of the vows I made to Thee, and following the sunnah of Thy beloved Rasulullah (Sallallahu alaihi wasallam), (I perform the Tawaf of the Holy Kabah). O Allah! Truly I ask Thy forgiveness, and Thy protection, and everlasting soundness in faith in this world and in the Hereafter, and that I be granted Paradise and be freed from the fires of Hell. Our Lord! Grant us good in this world and good in the Hereafter, and save us from the chastisement of fire, and allow us to enter Paradise with the righteous ones. O Glorious One! O All Forgiving! O Lord of the Universe!`,
    urdu: ""
  },
  {
    round: 2,
    arabic: `اللَّهُمَّ إِنَّ هَذَا الْبَيْتَ بَيْتُكَ ، وَالْحَرَمَ حَرَمُكَ ، وَاْلأَمْنَ أَمْنُكَ وَالْعَبْدَ عَبْدُكَ ، وَأَنَا عَبْدُكَ وَابْنُ عَبْدِكَ ، وَهَذَا مَقَامُ الْعَائِذِ بِكَ مِنَ النَّارِ ، فَحَرِّمْ لُحُوْمَنَا وَبَشَرَتَنَا عَلَى النَّارِ .

اللَّهُمَّ حَبِّبْ إِلَيْنَا الإِيْمَانَ وَزَيِّنْهُ فِيْ قُلُوْبِنَا ، وَکَرِّهْ إِلَيْنَا الْکُفْرَ وَالْفُسُوْقَ وَالْعِصْيَانَ وَاجْعَلْنَا مِنَ الرَّاشِدِيْنَ . اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ . اللَّهُمَّ ارْزُقْنِيْ الْجَنَّةَ بِغَيْرِ حِسَابٍ.

رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ، وَأدْخِلْنَا الْجَنَّةَ مَعَ الْأبْرَاَرِ ، يَا عَزِيرُ يَا غَفَّارُ ، يَا رَبَّ الْعَالَمِينَ.`,
    english: `O Allah! This House is Your House, this Sanctuary is Your Sanctuary, and the Security is Your Security, the slave is Your Slave, and I am Your Slave and the son of Your slave. This place is a refuge for those who seek Your Protection from the fire. Forbid our flesh and our complexion from the Fire (of Hell). O Allah! Endear to us the Faith, and adorn with it our hearts, and make hateful to us disbelief, wickedness and transgression, and cause us to be among those who are rightly guided. O Allah! Protect me from Thy punishment on the Day when Thou shalt resurrect Thy slaves. O Allah! Allow me to enter Paradise without any accounting. Our Lord! Grant us good in this world and good in the Hereafter, and save us from the chastisement of fire, and allow us to enter Paradise with the righteous ones. O Glorious One! O All Forgiving! O Lord of the Universe!`,
    urdu: ""
  },
  {
    round: 3,
    arabic: `اللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الشَّكِ وَالشِّرْكِ وَالشِّقَاقِ وَالنِّفَاقِ وَسُوْءِ الأَخْلاَقِ ، وَسُوْءِ الْمَنْظَرِ وَالْمُنْقَلَبِ فِيْ الْمَالِ وَاْلأَهْلِ وَالْوَلَدِ

اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ ، وَأَعُوْذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ . اللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنْ فِتْنَةِ الْقَبْرِ ، وَأَعُوْذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ

رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ، وَأدْخِلْنَا الْجَنَّةَ مَعَ الْأبْرَاَرِ ، يَا عَزِيرُ يَا غَفَّارُ ، يَا رَبَّ الْعَالَمِينَ .`,
    english: `O Allah! Truly, I seek refuge in Thee from doubt and from associating with Thee others (in worship), and from discord, hypocrisy, and immorality, and from returning home to see my family and my children in an evil state of affairs. O Allah! Truly I ask Thee for Thy pleasure and that I be allowed to enter Paradise. And I take refuge in Thee from Thy anger and from the fire of Hell. O Allah! I seek refuge in Thee from falling from your grace in my grave and from the temptations in this life and trials at the time of death. Our Lord! Grant us good in this world and good in the Hereafter, and save us from the chastisement of fire, and allow us to enter Paradise with the righteous ones. O Glorious One! O All Forgiving! O Lord of the Universe!`,
    urdu: ""
  },
  {
    round: 4,
    arabic: `اللَّهُمَّ اجْعَلْهُ حِجًّا مَبْرُوْرًا وَسَعْيًا مَشْکُوْرًا ، وَذَنْبًا مَغْفُوْرًا ، وَعَمَلاً صَالِحًا مَقْبُوْلاً ، وَتِجَارَةً لَنْ تَبُوْرَ يَا عَالِمَ مَا فِيْ الصُّدُوْرِ أَخْرِجْنِي يَا اللهُ مِنَ الظُّلُمَاتِ إِلَى النُّوْرِ

اللَّهُمَّ إِنِّي أَسْأَلُكَ مُوْجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ وَالسَّلاَمَةَ مِنْ کُلِّ إِثْمٍ وَالْغَنِيْمَةَ مِنْ كُلِّ بِرٍ ، وَالْفَوْزَ بِالْجَنَّةِ وَالْنَجَاةَ مِنَ النَّارِ

رَبِّ قَنِّعْنِي بِمَا رَزَقْتَنِي ، وَبَارِكْ لِي فِيْمَا أَعْطَيْتَنِي وَأَخْلِفْ عَلَى کُلِّ غَائِبَةٍ لِيْ مِنْكَ بِخَيْرٍ

رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ، وَأدْخِلْنَا الْجَنَّةَ مَعَ الْأبْرَاَرِ ، يَا عَزِيرُ يَا غَفَّارُ ، يَا رَبَّ الْعَالَمِينَ .`,
    english: `O Allah! Allow this pilgrimage to be accepted, and this endeavor to be rewarded, and my sins to be forgiven, and my good deeds to be approved and cause my business to flourish; O Thou, who knoweth all that is in our hearts! O Allah! Take me out of darkness into light. O Allah! I ask Thee that I be worthy of Thy Mercy, and certain of Thy Forgiveness, and immune to all sins, and be worthy of rewards for all my virtues, and be worthy of entering Paradise and be immune from Hell. O My Lord! Make me content with what Thou hast bestowed upon me. And let Thy Blessings be with what Thou hast given me. And compensate all that I lack with Thy own favor. Our Lord! Grant us good in this world and good in the Hereafter, and save us from the chastisement of fire, and allow us to enter Paradise with the righteous ones. O Glorious One! O All Forgiving! O Lord of the Universe!`,
    urdu: ""
  },
  {
    round: 5,
    arabic: `اللَّهُمَّ أَظِلَّنِي تَحْتَ ظِلِّ عَرْشِكَ يَوْمَ لاَ ظِلَّ إِلاَّ ظِلُّكَ ، وَلاَ بَاقِيَ إِلاَّ وَجْهُكَ ، وَاسْقِنِي مِنْ حَوْضِ نَبِيِّكَ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ شَرْبَةً هَنِيْئَةً مَرِيْئَةً لاَ نَظْمَأُ بَعْدَهَا أَبَدًا

اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ نَبِيُّكَ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَكَ مِنْهُ نَبِيُّكَ سَيِّدُنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ . اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَنَعِيْمَهَا وَمَا يُقَرِّبُنِي إِلَيْهَا مِنْ قَوْلٍ أَوْ فِعْلٍ أَوْ عَمَلٍ

رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ، وَأدْخِلْنَا الْجَنَّةَ مَعَ الْأبْرَاَرِ ، يَا عَزِيرُ يَا غَفَّارُ ، يَا رَبَّ الْعَالَمِينَ`,
    english: `O Allah! Bestow upon me the shade of Thy Throne on the Day when there shall be no shade except Thine, and there shall be no countenance except Thine. And allow me a drink from the cistern of Thy Rasulullah (Sallallahu alaihi wasallam) — a drink so pleasant that it may quench my thirst forever. O Allah! I ask Thee the best of that which Thy Rasulullah (Sallallahu alaihi wasallam) has asked of Thee. And I seek refuge in Thee from the evils from which Thy Rasulullah (Sallallahu alaihi wasallam) has sought refuge in Thee. O Allah! Truly I beseech Thee to grant me Paradise and its delights and whatever may bring me nearer to it whether by word, or by act, or by deed. And I seek refuge in Thee from the fires of Hell and whatever may bring me nearer to it whether by word, or by act, or by deed. Our Lord! Grant us good in this world and good in the Hereafter, and save us from the chastisement of fire, and allow us to enter Paradise with the righteous ones. O Glorious One! O All Forgiving! O Lord of the Universe!`,
    urdu: ""
  },
  {
    round: 6,
    arabic: `اللَّهُمَّ إِنَّ لَكَ عَلَيَّ حُقُوقًا کَثِيْرَةً فِيْمَا بَيْنِيْ وَبَيْنِكَ ، وَحُقُوْقًا کَثِيْرَةً فِيْمَا بَيْنِي وَبَيْنَ خَلْقِكَ اللَّهُمَّ مَا کَانَ لَكَ مِنْهَا فَاغْفِرْهُ لِي وَمَا کَانَ لِخَلْقِكَ فَتَحَمَّلْهُ عَنِّي وَاغْنِنِيْ بِحَلاَلِكَ عَنْ حَرَامِكَ وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ ، وَبِفَضْلِكَ عَمَّنْ سِوَاكَ ، يَا وَاسِعَ الْمَغْفِرَةِ .

اللَّهُمَّ إِنَّ بَيْتِكَ عَظِيْمٌ ، وَوَجْهَكَ کَرِيْمٌ ، وَأَنْتَ يَا أللهُ حَلِيْمٌ کَرِيْمٌ عَظِيْمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي

رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ، وَأدْخِلْنَا الْجَنَّةَ مَعَ الْأبْرَاَرِ ، يَا عَزِيرُ يَا غَفَّارُ ، يَا رَبَّ الْعَالَمِينَ`,
    english: `O Allah! Thou hast many claims on me in my relations to Thee, and many claims in my relations to Thy creatures. O Allah! Release me of those which I owe to Thee, and give me the strength to bear those which I owe to Thy creatures. Make me content with what Thou hast made lawful and enable me to reject what Thou hast declared forbidden. And make me content with obedience to Thee, and let me beware of Thy disobedience. And make me content with Thy favor so that I may not seek favor from any one else, O Thou, whose Mercy is All Embracing. O Allah! Truly Thy house is Glorious and Thy Countenance Benign, and Thou, O Allah! art Clement, Noble and Great. Thou lovest forgiveness, so forgive me. Our Lord! Grant us good in this world and good in the Hereafter, and save us from the chastisement of fire, and allow us to enter Paradise with the righteous ones. O Glorious One! O All Forgiving! O Lord of the Universe!`,
    urdu: ""
  },
  {
    round: 7,
    arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ إِيْمَانًا کَامِلاً ، وَيَقِيْنًا صَادِقًا وَرِزْقًا وَاسِعًا وَقَلْبًا خَاشِعًا وَلِسَانًا ذَاکِرًا ، وَحَلاَلاً طَيِّبًا وَتَوْبَةً نَصُوْحًا ، وَتَوْبَةً قَبْلَ الْمَوْتِ وَرَاحَةً عِنْدَ الْمَوْتِ وَمَغْفِرَةً وَرَحْمَةً بَعْدَ الْمَوْتِ ، وَالْعَفْوَ عِنْدَ الْحِسَابِ. وَالْفَوْزَ بِالْجَنَّةِ ، وَالنَّجَاةَ مِنَ النَّارِ بِرَحْمَتِكَ يَا عَزِيْزُ يَا غَفَّارُ رَبِّ زِدْنِي عِلْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ.

رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ، وَأدْخِلْنَا الْجَنَّةَ مَعَ الْأبْرَاَرِ ، يَا عَزِيرُ يَا غَفَّارُ ، يَا رَبَّ الْعَالَمِينَ`,
    english: `O Allah! I seek from Thee a faith that is perfect, a conviction that is true, a heart that is full of devotion towards Thee, and a tongue that is forever engaged in Thy remembrance; and provisions that are vast, lawful and clean, and a repentance that is sincere; a repentance before death, peace at the time of death and Thy Benign Forgiveness and Mercy after death, and Thy Pardon at the time of reckoning, and the reward of Paradise and a reprieve from the fires of Hell. Accept my prayers O The Mighty One! O The Forgiver! O My Lord! Increase me in my knowledge and may I be counted among the righteous. Our Lord! Grant us good in this world and good in the Hereafter, and save us from the chastisement of fire, and allow us to enter Paradise with the righteous ones. O Glorious One! O All Forgiving! O Lord of the Universe!`,
    urdu: ""
  }
];
