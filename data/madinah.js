// Guide for the visit to Madinah — ziyarat (places to visit) and the duas
// to recite at each. This is separate from the Tawaaf duas.
//
// Structure:
//   MADINAH_GUIDE.sections[]        → groups shown as headings on the page
//     .items[]                      → a place / step, shown as an expandable card
//       .significance_en / _ur      → history and virtue of the place
//       .steps_en / .steps_ur       → "what to do" bullet points
//       .note_en / .note_ur         → optional highlighted tip (permits, timings…)
//       .duas[]                     → duas for this place
//
// Dua fields (same conventions as data/tawaaf-duas.js):
//   arabic, english, urdu → paragraphs separated by a blank line (\n\n).
//   reference             → optional source (e.g. "Sahih Muslim 713").
// Leave a field as "" and the page shows a placeholder until it is filled in.

const MADINAH_GUIDE = {
  title_en: "Visiting Madinah",
  title_ur: "مدینہ منورہ کی زیارت",
  intro_en:
    "Visiting Madinah is not a rite of Umrah and needs no ihram, but it is a blessed journey to the city of the Prophet ﷺ. Here is what to do and the duas to recite at each place.",
  intro_ur:
    "مدینہ منورہ کی حاضری عمرہ کا حصہ نہیں اور اس کے لیے احرام کی ضرورت نہیں، لیکن یہ نبی کریم ﷺ کے شہر کا بابرکت سفر ہے۔ یہاں ہر مقام پر کیا کرنا ہے اور کون سی دعائیں پڑھنی ہیں، درج ہیں۔",

  sections: [
    {
      id: "arrival",
      title_en: "Arriving in Madinah",
      title_ur: "مدینہ منورہ آمد",
      items: [
        {
          id: "entering-madinah",
          title_en: "Entering the City",
          title_ur: "شہرِ مدینہ میں داخلہ",
          subtitle_en: "As you approach and enter Madinah",
          subtitle_ur: "مدینہ منورہ کے قریب پہنچتے اور داخل ہوتے وقت",
          significance_en:
            "Madinah — also called Tayyibah — is the city the Prophet ﷺ migrated to, where he lived the last ten years of his life and where he is buried. He declared it a sanctuary (haram) and prayed: “O Allah, place in Madinah twice the blessing You placed in Makkah.” (Bukhari)",
          significance_ur:
            "مدینہ منورہ — جسے طیبہ بھی کہا جاتا ہے — وہ شہر ہے جہاں نبی کریم ﷺ نے ہجرت فرمائی، اپنی حیاتِ مبارکہ کے آخری دس سال گزارے اور جہاں آپ ﷺ آرام فرما ہیں۔ آپ ﷺ نے اسے حرم قرار دیا اور دعا فرمائی: ”اے اللہ! مدینہ میں مکہ سے دگنی برکت عطا فرما۔“ (بخاری)",
          steps_en: [
            "Send abundant salawat (durood) upon the Prophet ﷺ as you approach the city.",
            "If possible, take a bath (ghusl), wear clean clothes and apply fragrance before going to the Masjid.",
            "Keep your voice low and your heart humble — this is the city of the Prophet ﷺ."
          ],
          steps_ur: [
            "شہر کے قریب پہنچتے ہوئے نبی کریم ﷺ پر کثرت سے درود شریف پڑھیں۔",
            "اگر ممکن ہو تو مسجد جانے سے پہلے غسل کریں، صاف کپڑے پہنیں اور خوشبو لگائیں۔",
            "آواز پست اور دل عاجز رکھیں — یہ نبی کریم ﷺ کا شہر ہے۔"
          ],
          duas: [
            {
              id: "dua-entering-madinah",
              title_en: "Dua on entering Madinah",
              title_ur: "مدینہ منورہ میں داخل ہونے کی دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            },
            {
              id: "salawat",
              title_en: "Salawat upon the Prophet ﷺ",
              title_ur: "درود شریف",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        }
      ]
    },

    {
      id: "masjid-nabawi",
      title_en: "Masjid an-Nabawi",
      title_ur: "مسجدِ نبوی ﷺ",
      items: [
        {
          id: "entering-masjid",
          title_en: "Entering the Masjid",
          title_ur: "مسجد میں داخلہ",
          subtitle_en: "Every time you enter Masjid an-Nabawi",
          subtitle_ur: "جب بھی مسجدِ نبوی میں داخل ہوں",
          significance_en:
            "Masjid an-Nabawi was built by the Prophet ﷺ himself with his Companions when he arrived in Madinah. It is one of only three masjids to which a special journey is made, and a prayer here is better than a thousand prayers elsewhere, except Masjid al-Haram. (Bukhari, Muslim)",
          significance_ur:
            "مسجدِ نبوی نبی کریم ﷺ نے مدینہ تشریف لانے کے بعد صحابۂ کرام کے ساتھ خود تعمیر فرمائی۔ یہ ان تین مساجد میں سے ہے جن کی طرف خاص طور پر سفر کیا جاتا ہے، اور یہاں ایک نماز مسجدِ حرام کے علاوہ دوسری جگہوں کی ہزار نمازوں سے افضل ہے۔ (بخاری، مسلم)",
          steps_en: [
            "Enter with your right foot, say Bismillah and send durood upon the Prophet ﷺ (below).",
            "Then recite the dua for entering the masjid.",
            "Pray 2 rakaat Tahiyyat-ul-Masjid before sitting down.",
            "When leaving, step out with your left foot, send durood upon the Prophet ﷺ, then recite the dua for leaving the masjid."
          ],
          steps_ur: [
            "دایاں پاؤں پہلے اندر رکھیں، بسم اللہ پڑھیں اور نبی کریم ﷺ پر درود بھیجیں (نیچے درج ہے)۔",
            "پھر مسجد میں داخل ہونے کی دعا پڑھیں۔",
            "بیٹھنے سے پہلے 2 رکعت تحیۃ المسجد ادا کریں۔",
            "نکلتے وقت بایاں پاؤں پہلے باہر رکھیں، نبی کریم ﷺ پر درود بھیجیں، پھر مسجد سے نکلنے کی دعا پڑھیں۔"
          ],
          duas: [
            {
              id: "durood-entering-masjid",
              title_en: "Durood on entering the masjid",
              title_ur: "مسجد میں داخل ہوتے وقت درود",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            },
            {
              id: "dua-entering-masjid",
              title_en: "Dua on entering the masjid",
              title_ur: "مسجد میں داخل ہونے کی دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            },
            {
              id: "durood-leaving-masjid",
              title_en: "Durood on leaving the masjid",
              title_ur: "مسجد سے نکلتے وقت درود",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            },
            {
              id: "dua-leaving-masjid",
              title_en: "Dua on leaving the masjid",
              title_ur: "مسجد سے نکلنے کی دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        },
        {
          id: "salam",
          title_en: "Salam to the Prophet ﷺ",
          title_ur: "روضۂ اقدس پر سلام",
          subtitle_en: "At the blessed grave (Rawdah Sharif)",
          subtitle_ur: "روضۂ مبارک پر حاضری",
          significance_en:
            "The Prophet ﷺ is buried in the room of Sayyida Aisha (RA), with Sayyiduna Abu Bakr (RA) and Sayyiduna Umar (RA) beside him. He ﷺ said: “No one sends salam upon me except that Allah returns my soul to me so that I return his salam.” (Abu Dawud)",
          significance_ur:
            "نبی کریم ﷺ سیدہ عائشہ رضی اللہ عنہا کے حجرۂ مبارک میں آرام فرما ہیں، اور آپ ﷺ کے ساتھ سیدنا ابو بکر صدیق رضی اللہ عنہ اور سیدنا عمر فاروق رضی اللہ عنہ مدفون ہیں۔ آپ ﷺ نے فرمایا: ”جو بھی مجھ پر سلام بھیجتا ہے، اللہ میری روح لوٹا دیتا ہے یہاں تک کہ میں اس کے سلام کا جواب دیتا ہوں۔“ (ابو داؤد)",
          steps_en: [
            "Follow the line of visitors along the qibla wall towards the blessed grave (usually entering from Bab-us-Salam).",
            "Stand respectfully, lower your gaze and your voice, and send salam upon the Prophet ﷺ.",
            "Move one step to the right and send salam upon Sayyiduna Abu Bakr (RA).",
            "Move one more step to the right and send salam upon Sayyiduna Umar (RA).",
            "Continue with the flow and exit (usually through Bab-ul-Baqi)."
          ],
          steps_ur: [
            "قبلہ کی دیوار کے ساتھ زائرین کی قطار میں روضۂ مبارک کی طرف چلیں (عموماً باب السلام سے داخلہ ہوتا ہے)۔",
            "ادب سے کھڑے ہوں، نظریں جھکائیں، آواز پست رکھیں اور نبی کریم ﷺ پر سلام پیش کریں۔",
            "ایک قدم دائیں ہٹ کر سیدنا ابو بکر صدیق رضی اللہ عنہ پر سلام پیش کریں۔",
            "ایک قدم مزید دائیں ہٹ کر سیدنا عمر فاروق رضی اللہ عنہ پر سلام پیش کریں۔",
            "قطار کے ساتھ آگے بڑھیں اور باہر نکلیں (عموماً باب البقیع سے)۔"
          ],
          note_en: "Guards keep the line moving — keep your salam short at the grave and make longer duas elsewhere in the Masjid.",
          note_ur: "محافظ قطار کو چلاتے رہتے ہیں — روضۂ مبارک پر سلام مختصر رکھیں اور لمبی دعائیں مسجد میں کسی اور جگہ کریں۔",
          duas: [
            {
              id: "salam-prophet",
              title_en: "Salam upon the Prophet ﷺ",
              title_ur: "نبی کریم ﷺ پر سلام",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            },
            {
              id: "salam-abu-bakr",
              title_en: "Salam upon Sayyiduna Abu Bakr (RA)",
              title_ur: "سیدنا ابو بکر صدیق رضی اللہ عنہ پر سلام",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            },
            {
              id: "salam-umar",
              title_en: "Salam upon Sayyiduna Umar (RA)",
              title_ur: "سیدنا عمر فاروق رضی اللہ عنہ پر سلام",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        },
        {
          id: "riyadh-ul-jannah",
          title_en: "Riyadh-ul-Jannah",
          title_ur: "ریاض الجنۃ",
          subtitle_en: "The garden from the gardens of Paradise",
          subtitle_ur: "جنت کے باغوں میں سے ایک باغ",
          significance_en:
            "The Prophet ﷺ said: “Between my house and my minbar is a garden from the gardens of Paradise, and my minbar is over my Hawd (pond).” (Bukhari, Muslim)",
          significance_ur:
            "نبی کریم ﷺ نے فرمایا: ”میرے گھر اور میرے منبر کے درمیان کا حصہ جنت کے باغوں میں سے ایک باغ ہے، اور میرا منبر میرے حوض پر ہے۔“ (بخاری، مسلم)",
          steps_en: [
            "The area between the Prophet's ﷺ house and his minbar — marked by the green carpet.",
            "Pray 2 rakaat nafl here and spend your time in dua and dhikr.",
            "Give others a chance — pray, make dua and make room for the next group."
          ],
          steps_ur: [
            "نبی کریم ﷺ کے حجرۂ مبارک اور منبر کے درمیان کا حصہ — سبز قالین سے پہچانا جاتا ہے۔",
            "یہاں 2 رکعت نفل ادا کریں اور اپنا وقت دعا اور ذکر میں گزاریں۔",
            "دوسروں کو بھی موقع دیں — نماز اور دعا کے بعد اگلے گروپ کے لیے جگہ خالی کریں۔"
          ],
          note_en: "A permit is required — book a time slot in the Nusuk app. Slots for men and women are separate.",
          note_ur: "اجازت نامہ ضروری ہے — نسک (Nusuk) ایپ میں وقت بک کریں۔ مردوں اور خواتین کے اوقات الگ ہیں۔",
          duas: [
            {
              id: "dua-riyadh-ul-jannah",
              title_en: "Dua in Riyadh-ul-Jannah",
              title_ur: "ریاض الجنۃ میں دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        }
      ]
    },

    {
      id: "ziyarat",
      title_en: "Ziyarat Around Madinah",
      title_ur: "مدینہ منورہ کی زیارات",
      items: [
        {
          id: "jannat-al-baqi",
          title_en: "Jannat-ul-Baqi",
          title_ur: "جنت البقیع",
          subtitle_en: "The cemetery beside Masjid an-Nabawi",
          subtitle_ur: "مسجدِ نبوی کے ساتھ واقع قبرستان",
          significance_en:
            "The main cemetery of Madinah since the Prophet's ﷺ time. Thousands of Companions rest here, including Sayyiduna Uthman (RA), Sayyiduna Hasan ibn Ali (RA), Sayyiduna Abbas (RA), Ibrahim — the Prophet's ﷺ infant son — and many of the Mothers of the Believers. The Prophet ﷺ would go out to Baqi at night and make dua for its people. (Muslim)",
          significance_ur:
            "نبی کریم ﷺ کے زمانے سے مدینہ کا مرکزی قبرستان۔ یہاں ہزاروں صحابۂ کرام مدفون ہیں، جن میں سیدنا عثمان غنی، سیدنا حسن بن علی، سیدنا عباس رضی اللہ عنہم، نبی کریم ﷺ کے صاحبزادے سیدنا ابراہیم، اور کئی امہات المؤمنین شامل ہیں۔ نبی کریم ﷺ رات کو بقیع تشریف لے جاتے اور اہلِ بقیع کے لیے دعا فرماتے۔ (مسلم)",
          steps_en: [
            "Whenever you pass by Baqi — even if you are not going inside — send salam upon its people (below).",
            "When it is open, enter, send salam upon the people of the graves and make dua for them.",
            "Keep the visit simple and quiet, as the Prophet ﷺ taught."
          ],
          steps_ur: [
            "جب بھی بقیع کے پاس سے گزریں — چاہے اندر نہ جا رہے ہوں — اہلِ بقیع پر سلام بھیجیں (نیچے درج ہے)۔",
            "جب کھلا ہو تو داخل ہو کر اہلِ قبور پر سلام پیش کریں اور ان کے لیے دعا کریں۔",
            "نبی کریم ﷺ کی تعلیم کے مطابق زیارت سادگی اور خاموشی سے کریں۔"
          ],
          note_en: "Usually open for a short time after Fajr and after Asr. Entry is generally for men only.",
          note_ur: "عموماً فجر اور عصر کے بعد کچھ دیر کے لیے کھلتا ہے۔ داخلہ عام طور پر صرف مردوں کے لیے ہے۔",
          duas: [
            {
              id: "salam-passing-baqi",
              title_en: "Salam when passing by Baqi",
              title_ur: "بقیع کے پاس سے گزرتے وقت سلام",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            },
            {
              id: "dua-visiting-graves",
              title_en: "Dua when visiting the graves",
              title_ur: "قبرستان کی زیارت کی دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        },
        {
          id: "masjid-ghamamah",
          title_en: "Masjid al-Ghamamah",
          title_ur: "مسجدِ غمامہ",
          subtitle_en: "The masjid of the cloud — a short walk from Masjid an-Nabawi",
          subtitle_ur: "بادل والی مسجد — مسجدِ نبوی سے چند منٹ کے فاصلے پر",
          significance_en:
            "This was the open prayer ground (musalla) where the Prophet ﷺ led the Eid prayers in his later years, and where he prayed Salat-ul-Istisqa (the prayer for rain). It is called “Ghamamah” (cloud) because, it is narrated, a cloud gathered and shaded him — and rain came — as he prayed here. The masjid was later built on the spot, first in the time of Umar ibn Abdul Aziz, and the current Ottoman-style building with its domes has been restored in modern times.",
          significance_ur:
            "یہ وہ کھلی عیدگاہ (مصلیٰ) تھی جہاں نبی کریم ﷺ نے اپنے آخری سالوں میں عیدین کی نماز پڑھائی، اور یہیں آپ ﷺ نے نمازِ استسقاء (بارش کی نماز) ادا فرمائی۔ اسے ”غمامہ“ (بادل) اس لیے کہا جاتا ہے کہ روایت کے مطابق آپ ﷺ کے یہاں نماز پڑھتے وقت بادل نے سایہ کیا اور بارش ہوئی۔ بعد میں اس جگہ مسجد تعمیر ہوئی، پہلے عمر بن عبد العزیز کے دور میں، اور گنبدوں والی موجودہ عثمانی طرز کی عمارت کی جدید دور میں تجدید کی گئی ہے۔",
          steps_en: [
            "Walk south-west from Masjid an-Nabawi — it is only a few minutes away.",
            "Nearby are Masjid Abu Bakr and Masjid Ali, which also mark places where the Eid prayer was held."
          ],
          steps_ur: [
            "مسجدِ نبوی سے جنوب مغرب کی طرف چند منٹ پیدل چلیں۔",
            "قریب ہی مسجدِ ابو بکر اور مسجدِ علی ہیں، جو عید کی نماز کی جگہوں کی نشاندہی کرتی ہیں۔"
          ],
          note_en: "The masjid is often closed outside prayer times, but you can view it from the outside.",
          note_ur: "یہ مسجد نماز کے اوقات کے علاوہ اکثر بند رہتی ہے، لیکن باہر سے اس کی زیارت کی جا سکتی ہے۔",
          duas: [
            {
              id: "dua-ghamamah",
              title_en: "Dua at Masjid al-Ghamamah",
              title_ur: "مسجدِ غمامہ میں دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        },
        {
          id: "masjid-quba",
          title_en: "Masjid Quba",
          title_ur: "مسجدِ قباء",
          subtitle_en: "The first masjid built in Islam",
          subtitle_ur: "اسلام کی پہلی مسجد",
          significance_en:
            "The first masjid built in Islam, founded by the Prophet ﷺ on his arrival at Madinah during the Hijrah, and praised in the Quran as “a masjid founded on taqwa from the first day” (9:108). He ﷺ said: “Whoever purifies himself at home, then comes to Masjid Quba and prays in it, has the reward of an Umrah.” (Ibn Majah) He used to visit it every Saturday, walking or riding. (Bukhari)",
          significance_ur:
            "اسلام کی پہلی مسجد، جس کی بنیاد نبی کریم ﷺ نے ہجرت کے موقع پر مدینہ پہنچ کر رکھی۔ قرآن میں اسے ”وہ مسجد جس کی بنیاد پہلے دن سے تقویٰ پر رکھی گئی“ (التوبہ 108) کہا گیا۔ آپ ﷺ نے فرمایا: ”جو اپنے گھر میں وضو کرے، پھر مسجدِ قباء آ کر نماز پڑھے، اسے ایک عمرہ کا ثواب ملتا ہے۔“ (ابن ماجہ) آپ ﷺ ہر ہفتے کے دن پیدل یا سواری پر قباء تشریف لے جاتے تھے۔ (بخاری)",
          steps_en: [
            "Make wudu at your hotel before setting out.",
            "Pray 2 rakaat in Masjid Quba to earn the reward of an Umrah.",
            "If you can, go on a Saturday, following the sunnah of the Prophet ﷺ."
          ],
          steps_ur: [
            "روانگی سے پہلے ہوٹل میں وضو کر لیں۔",
            "مسجدِ قباء میں 2 رکعت ادا کریں تاکہ عمرہ کا ثواب حاصل ہو۔",
            "اگر ممکن ہو تو نبی کریم ﷺ کی سنت پر عمل کرتے ہوئے ہفتے کے دن جائیں۔"
          ],
          duas: [
            {
              id: "dua-quba",
              title_en: "Dua at Masjid Quba",
              title_ur: "مسجدِ قباء میں دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        },
        {
          id: "uhud",
          title_en: "Mount Uhud & the Martyrs of Uhud",
          title_ur: "جبلِ احد اور شہدائے احد",
          subtitle_en: "Site of the Battle of Uhud (3 AH)",
          subtitle_ur: "غزوۂ احد کا مقام (3 ہجری)",
          significance_en:
            "In 3 AH the Quraysh marched on Madinah and the Battle of Uhud was fought at the foot of this mountain. When the archers left their post on Jabal-ur-Rumah, the Muslims suffered a setback — around seventy Companions were martyred, including Sayyiduna Hamza (RA), the “Leader of the Martyrs”, and Sayyiduna Mus'ab ibn Umayr (RA), and the Prophet ﷺ himself was wounded. It is a lasting lesson in obedience and patience. The Prophet ﷺ said: “Uhud is a mountain that loves us and we love it.” (Bukhari)",
          significance_ur:
            "3 ہجری میں قریش نے مدینہ پر چڑھائی کی اور اسی پہاڑ کے دامن میں غزوۂ احد ہوا۔ جب تیر انداز جبل الرماۃ پر اپنی جگہ چھوڑ گئے تو مسلمانوں کو نقصان اٹھانا پڑا — تقریباً ستر صحابۂ کرام شہید ہوئے، جن میں ”سید الشہداء“ سیدنا حمزہ رضی اللہ عنہ اور سیدنا مصعب بن عمیر رضی اللہ عنہ شامل ہیں، اور خود نبی کریم ﷺ زخمی ہوئے۔ یہ اطاعت اور صبر کا دائمی سبق ہے۔ نبی کریم ﷺ نے فرمایا: ”احد ایسا پہاڑ ہے جو ہم سے محبت کرتا ہے اور ہم اس سے محبت کرتے ہیں۔“ (بخاری)",
          steps_en: [
            "Visit the graves of the Martyrs of Uhud, including Sayyiduna Hamza (RA), the uncle of the Prophet ﷺ.",
            "Send salam upon the martyrs and make dua for them.",
            "See Jabal-ur-Rumah (the Archers' Hill) and reflect on the lessons of the battle."
          ],
          steps_ur: [
            "شہدائے احد کی قبروں کی زیارت کریں، جن میں نبی کریم ﷺ کے چچا سیدنا حمزہ رضی اللہ عنہ بھی شامل ہیں۔",
            "شہداء پر سلام پیش کریں اور ان کے لیے دعا کریں۔",
            "جبل الرماۃ (تیر اندازوں کی پہاڑی) دیکھیں اور غزوہ کے اسباق پر غور کریں۔"
          ],
          duas: [
            {
              id: "salam-martyrs-uhud",
              title_en: "Salam upon the Martyrs of Uhud",
              title_ur: "شہدائے احد پر سلام",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        },
        {
          id: "masjid-qiblatayn",
          title_en: "Masjid al-Qiblatayn",
          title_ur: "مسجدِ قبلتین",
          subtitle_en: "The masjid of the two qiblas",
          subtitle_ur: "دو قبلوں والی مسجد",
          significance_en:
            "For about sixteen months after the Hijrah, Muslims prayed towards Bayt-ul-Maqdis in Jerusalem. In 2 AH the verse “So turn your face towards al-Masjid al-Haram” (2:144) was revealed, and in this masjid the worshippers turned from Jerusalem to the Kaaba in the middle of their prayer — giving it the name “the masjid of the two qiblas”.",
          significance_ur:
            "ہجرت کے بعد تقریباً سولہ ماہ تک مسلمان بیت المقدس کی طرف رخ کر کے نماز پڑھتے رہے۔ 2 ہجری میں آیت ”پس اپنا چہرہ مسجدِ حرام کی طرف پھیر لیجیے“ (البقرہ 144) نازل ہوئی، اور اس مسجد میں نمازیوں نے نماز کے دوران ہی بیت المقدس سے خانہ کعبہ کی طرف رخ پھیر لیا — اسی لیے اسے ”دو قبلوں والی مسجد“ کہا جاتا ہے۔",
          steps_en: [
            "Pray 2 rakaat nafl if it is not a disliked (makruh) time."
          ],
          steps_ur: [
            "اگر مکروہ وقت نہ ہو تو 2 رکعت نفل ادا کریں۔"
          ],
          duas: [
            {
              id: "dua-qiblatayn",
              title_en: "Dua at Masjid al-Qiblatayn",
              title_ur: "مسجدِ قبلتین میں دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        },
        {
          id: "khandaq",
          title_en: "The Seven Mosques (Khandaq)",
          title_ur: "مساجدِ سبعہ (خندق)",
          subtitle_en: "Site of the Battle of the Trench (5 AH)",
          subtitle_ur: "غزوۂ خندق کا مقام (5 ہجری)",
          significance_en:
            "In 5 AH an army of about ten thousand confederates (al-Ahzab) marched on Madinah. On the advice of Sayyiduna Salman al-Farsi (RA), the Muslims dug a trench (khandaq) along the open northern side of the city, with the Prophet ﷺ digging alongside them. After a long siege, Allah sent a wind and unseen forces that scattered the enemy (33:9). The Prophet ﷺ made dua for three days at the site of Masjid al-Fath, and it was answered on the Wednesday between Dhuhr and Asr. The small masjids nearby are named after Companions who stood guard there.",
          significance_ur:
            "5 ہجری میں تقریباً دس ہزار کا متحدہ لشکر (الاحزاب) مدینہ پر حملہ آور ہوا۔ سیدنا سلمان فارسی رضی اللہ عنہ کے مشورے پر مسلمانوں نے شہر کی کھلی شمالی جانب خندق کھودی، اور نبی کریم ﷺ نے خود بھی کھدائی میں حصہ لیا۔ طویل محاصرے کے بعد اللہ نے ہوا اور غیبی لشکر بھیج کر دشمن کو منتشر کر دیا (الاحزاب 9)۔ نبی کریم ﷺ نے مسجد الفتح کے مقام پر تین دن دعا فرمائی، جو بدھ کے دن ظہر اور عصر کے درمیان قبول ہوئی۔ قریب کی چھوٹی مساجد ان صحابۂ کرام کے نام سے منسوب ہیں جنہوں نے وہاں پہرہ دیا۔",
          steps_en: [
            "Visit Masjid al-Fath and the smaller masjids around it.",
            "Reflect on the sacrifice of the Companions and make dua for the ummah."
          ],
          steps_ur: [
            "مسجد الفتح اور اس کے آس پاس کی چھوٹی مساجد کی زیارت کریں۔",
            "صحابۂ کرام کی قربانیوں پر غور کریں اور امت کے لیے دعا کریں۔"
          ],
          duas: [
            {
              id: "dua-khandaq",
              title_en: "Dua at Masjid al-Fath",
              title_ur: "مسجد الفتح میں دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        }
      ]
    },

    {
      id: "farewell",
      title_en: "Leaving Madinah",
      title_ur: "مدینہ منورہ سے رخصت",
      items: [
        {
          id: "farewell-visit",
          title_en: "Farewell Visit",
          title_ur: "الوداعی حاضری",
          subtitle_en: "Before you depart the city",
          subtitle_ur: "شہر سے روانگی سے پہلے",
          significance_en:
            "Leaving the city of the Prophet ﷺ is felt deeply by every visitor. Take leave of the Masjid as the righteous have always done — with prayer and salam — asking Allah not to make this your last visit.",
          significance_ur:
            "نبی کریم ﷺ کے شہر سے رخصت ہونا ہر زائر کے لیے دل گداز لمحہ ہے۔ نیک لوگوں کی طرح نماز اور سلام کے ساتھ مسجد سے رخصت ہوں اور اللہ سے دعا کریں کہ یہ آپ کی آخری حاضری نہ ہو۔",
          steps_en: [
            "Pray 2 rakaat in Masjid an-Nabawi.",
            "Send salam upon the Prophet ﷺ one last time.",
            "Make dua that Allah accepts your visit and invites you back again."
          ],
          steps_ur: [
            "مسجدِ نبوی میں 2 رکعت نماز ادا کریں۔",
            "آخری بار نبی کریم ﷺ پر سلام پیش کریں۔",
            "دعا کریں کہ اللہ آپ کی حاضری قبول فرمائے اور دوبارہ بلائے۔"
          ],
          duas: [
            {
              id: "dua-farewell",
              title_en: "Farewell dua",
              title_ur: "الوداعی دعا",
              arabic: "",
              english: "",
              urdu: "",
              reference: ""
            }
          ]
        }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { MADINAH_GUIDE };
}
