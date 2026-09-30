// Guide for the visit to Madinah — ziyarat (places to visit) and the duas
// to recite at each. This is separate from the Tawaaf duas.
//
// Structure:
//   MADINAH_GUIDE.sections[]        → groups shown as headings on the page
//     .items[]                      → a place / step, shown as an expandable card
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
          steps_en: [
            "Enter with your right foot and recite the dua for entering the masjid.",
            "Pray 2 rakaat Tahiyyat-ul-Masjid before sitting down.",
            "Leave with your left foot and recite the dua for leaving the masjid."
          ],
          steps_ur: [
            "دایاں پاؤں پہلے اندر رکھیں اور مسجد میں داخل ہونے کی دعا پڑھیں۔",
            "بیٹھنے سے پہلے 2 رکعت تحیۃ المسجد ادا کریں۔",
            "نکلتے وقت بایاں پاؤں پہلے باہر رکھیں اور مسجد سے نکلنے کی دعا پڑھیں۔"
          ],
          duas: [
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
          steps_en: [
            "Resting place of many Companions and members of the Prophet's ﷺ family, including Sayyiduna Uthman (RA) and the Mothers of the Believers.",
            "Enter, send salam upon the people of the graves and make dua for them.",
            "Keep the visit simple and quiet, as the Prophet ﷺ taught."
          ],
          steps_ur: [
            "یہاں بہت سے صحابۂ کرام اور اہلِ بیت مدفون ہیں، جن میں سیدنا عثمان غنی رضی اللہ عنہ اور امہات المؤمنین شامل ہیں۔",
            "داخل ہو کر اہلِ قبور پر سلام پیش کریں اور ان کے لیے دعا کریں۔",
            "نبی کریم ﷺ کی تعلیم کے مطابق زیارت سادگی اور خاموشی سے کریں۔"
          ],
          note_en: "Usually open for a short time after Fajr and after Asr. Entry is generally for men only.",
          note_ur: "عموماً فجر اور عصر کے بعد کچھ دیر کے لیے کھلتا ہے۔ داخلہ عام طور پر صرف مردوں کے لیے ہے۔",
          duas: [
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
          id: "masjid-quba",
          title_en: "Masjid Quba",
          title_ur: "مسجدِ قباء",
          subtitle_en: "The first masjid built in Islam",
          subtitle_ur: "اسلام کی پہلی مسجد",
          steps_en: [
            "Make wudu at your hotel before setting out.",
            "Pray 2 rakaat in Masjid Quba — the Prophet ﷺ said this carries the reward of an Umrah.",
            "The Prophet ﷺ used to visit Quba every Saturday, so a Saturday visit follows his sunnah."
          ],
          steps_ur: [
            "روانگی سے پہلے ہوٹل میں وضو کر لیں۔",
            "مسجدِ قباء میں 2 رکعت ادا کریں — نبی کریم ﷺ نے فرمایا کہ اس کا ثواب ایک عمرہ کے برابر ہے۔",
            "نبی کریم ﷺ ہر ہفتے کے دن قباء تشریف لے جاتے تھے، اس لیے ہفتے کے دن جانا سنت ہے۔"
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
          steps_en: [
            "Visit the graves of the Martyrs of Uhud, including Sayyiduna Hamza (RA), the uncle of the Prophet ﷺ.",
            "Send salam upon the martyrs and make dua for them.",
            "See Jabal-ur-Rumah (the Archers' Hill) and reflect on the lessons of the battle.",
            "The Prophet ﷺ said: “Uhud is a mountain that loves us and we love it.”"
          ],
          steps_ur: [
            "شہدائے احد کی قبروں کی زیارت کریں، جن میں نبی کریم ﷺ کے چچا سیدنا حمزہ رضی اللہ عنہ بھی شامل ہیں۔",
            "شہداء پر سلام پیش کریں اور ان کے لیے دعا کریں۔",
            "جبل الرماۃ (تیر اندازوں کی پہاڑی) دیکھیں اور غزوہ کے اسباق پر غور کریں۔",
            "نبی کریم ﷺ نے فرمایا: ”احد ایسا پہاڑ ہے جو ہم سے محبت کرتا ہے اور ہم اس سے محبت کرتے ہیں۔“"
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
          steps_en: [
            "Where the command came to change the qibla from Bayt-ul-Maqdis to the Kaaba, during prayer.",
            "Pray 2 rakaat nafl if it is not a disliked (makruh) time."
          ],
          steps_ur: [
            "یہاں نماز کے دوران بیت المقدس سے خانہ کعبہ کی طرف قبلہ تبدیل کرنے کا حکم آیا۔",
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
          steps_en: [
            "Area where the Muslims dug the trench to defend Madinah.",
            "Masjid al-Fath stands where the Prophet ﷺ made dua for victory over three days."
          ],
          steps_ur: [
            "وہ جگہ جہاں مسلمانوں نے مدینہ کے دفاع کے لیے خندق کھودی تھی۔",
            "مسجد الفتح اس جگہ ہے جہاں نبی کریم ﷺ نے تین دن فتح کے لیے دعا فرمائی۔"
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
