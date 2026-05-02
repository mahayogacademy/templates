const b = import.meta.env.BASE_URL;

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  tag: string;
  date: string;
  thumbnail?: string;
  thumbnailGradient?: string;
  excerpt: string;
  content: ArticleBlock[];
}

export const ARTICLES: Article[] = [
  /* ─────────────────────────────────────────────────────── */
  {
    id: "barahachhetra",
    title: "The Spiritual Significance of Barahachhetra",
    subtitle: "A Sacred Confluence of Liberation, Lineage, and Living Dharma",
    tag: "Sacred Geography",
    date: "20 April 2025",
    thumbnail: `${b}images/teachings-prana.png`,
    excerpt:
      "In the sacred geography of Sanātan Dharma, certain lands do not merely witness divinity. They hold it. Barahachhetra is one such land — revered across ages by gods, rishis, avatars, ancestors, and saints.",
    content: [
      { type: "p", text: "In the sacred geography of Sanātan Dharma, certain lands do not merely witness divinity. They hold it. Barahachhetra is one such land. Revered across ages by gods, rishis, avatars, ancestors, and saints, Siddhababa explains this sacred region stands as a living confluence of moksha, tapasya, and enduring spiritual lineage." },
      { type: "h2", text: "The Descent of Lord Varaha and the Birth of Sacred Waters" },
      { type: "p", text: "Ancient tradition recounts a time when Lord Varaha, the divine incarnation of Lord Vishnu, moved across the earth in a fierce and exalted state. So intense was His presence that even the gods hesitated to approach Him. Seeking the welfare of the cosmos, the devas invoked a divine unfolding that would restore balance." },
      { type: "p", text: "As Lord Varaha journeyed from west to east, a pivotal moment occurred. When Kamadhenu, the celestial cow, slipped upon the Mahabharat Parbat, the Koka River emerged from the earth. At this very site, Lord Varaha rested upon a raised platform known as a chabutra. Over time, through spoken tradition, chabutra became chhatra, giving rise to the sacred name known today as Barahachhetra." },
      { type: "p", text: "From here, some eight kilometers afar, the Lord moved onward to the confluence of the Koka and Kaushiki rivers, where He entered a state of supreme bliss. This sangam became not merely a meeting of waters, but a sacred site where divine presence and ancestral liberation converged." },
      { type: "h2", text: "A Sacred Boon for the Ancestors" },
      { type: "p", text: "At this divine confluence, Aryama and the Pitrs, the ancestral beings, were immersed in deep penance. Upon worshipping Lord Varaha, they were offered a boon. Their request shaped the destiny of this land." },
      { type: "quote", text: "Whoever comes to the Koka–Kaushiki region and performs remembrance, Shraddha, Pindadan, and Tarpan with sincerity shall grant liberation to their ancestors." },
      { type: "p", text: "Thus, Barahachhetra became known as one of the very few places in the Bharatabharsa tradition where ancestral rites bestow moksha — liberation, not merely temporary peace. While rites in other sacred locations may grant solace for a limited span of time, it is here, at Barahachhetra, that the ancestral journey finds final release." },
      { type: "h2", text: "A Land Where Time Condenses" },
      { type: "p", text: "Scriptural tradition speaks clearly about the spiritual potency of this land. What requires thousands of years of penance elsewhere is attained here in a fraction of time." },
      { type: "quote", text: "It is written in the Skanda Purana that the spiritual merit obtained by performing austerities at Ganga Sagar for sixty thousand years, or by undertaking penance there for seven thousand years, is attained at the banks of the Kaushiki River at Barahachhetra in merely two moments." },
      { type: "quote", text: "Lord Varaha says to Mother Bhagavati: 'O Devi, make the Earth understand that the merit obtained by performing austerities for ten thousand years in other sacred places is achieved at Barahachhetra by performing penance for just one day and one night.'" },
      { type: "p", text: "This is not a land of effort alone. It is a land of grace made immediate." },
      { type: "h2", text: "Purification Beyond Pilgrimage" },
      { type: "p", text: "The sanctity of Barahachhetra is further illuminated through the account of Balram Ji. Burdened by unresolved karmic weight from the killing of Sutji, he journeyed across countless tirthas seeking purification, yet found no release. It was only upon the guidance of Lord Krishna, who instructed him to bathe in the sacred Kaushiki River, that Balram Ji attained absolution from the grave burden of Brahmahatya." },
      { type: "p", text: "This moment reveals a profound truth. Some karmic imprints are not dissolved by movement alone, but by entering the right waters." },
      { type: "h2", text: "Bedrock for Vedic Civilization: The Land of Avatars, Rishis, and Saints" },
      { type: "p", text: "This sacred land has been served and sanctified by the rishis. It is remembered as the site where the five Pandavas lived in secret exile for one year, offering refuge, endurance and restraint." },
      { type: "p", text: "Approximately seven hundred years ago, Sri Ramanandacharya Ji came to this sacred land and undertook twelve years of intense penance. Thereafter, from this soil, he entrusted the continuity of Ramanadi wisdom to Sri Narharyanandacharya Ji, the disciple of his senior disciple Sri Anantanan, giving him the lineage's spiritual seat (gaddi)." },
      { type: "p", text: "Subsequently, Sri Narharyanandacharya Ji brought Goswami Tulsidas, during his childhood, from Chitrakoot to this very place. Goswami Tulsidas himself bears witness to the sanctity of this land in Canto Thirty of the Bal Kand of the Shrimad Ramcharitmanas, where he praises and invokes this sacred site." },
      { type: "p", text: "Beholding the intensity and depth of Tulsidas Ji's spiritual study and discipline, the revered Guru sent him onward from Barahachetra to Kashi (Banaras), to carry Rama bhakti into the heart of the world. Thus, the teachings of the Ramanandi lineage were received and transmitted from this very land." },
      { type: "p", text: "Barahachetra is shaped by tapasya, and steeped in Vedic realization. Tradition holds that Ved Vyasa, the compiler of the eighteen Puranas, along with sages such as Vashistha, Parashara, and Shukadeva, manifested upon this very soil. Great commentators and teachers also arose here, strengthening the foundations of Sanātan knowledge." },
      { type: "p", text: "Barahachhetra stands within Nepal, revered as a Vedic Sanātan land — not merely by geography, but by continuity of living wisdom." },
      { type: "p", text: "To step onto this land is not merely to visit a pilgrimage site. It is to enter a threshold of remembrance, devotion, and realization." },
    ],
  },

  /* ─────────────────────────────────────────────────────── */
  {
    id: "guru-imperishable-soul",
    title: "The Guru and the Imperishable Soul",
    subtitle: "Understanding the Conscious Principle and the Path to Realization",
    tag: "Gurudev",
    date: "14 April 2025",
    thumbnail: `${b}images/teachings-article-1.png`,
    excerpt:
      "All worldly elements are material and perishable. Yet beyond this changing world exists another principle — the conscious essence. This is the teaching of the Guru on the nature of the soul and the path to realization.",
    content: [
      { type: "p", text: "All worldly elements are material (prakṛta) and perishable. Everything we see, touch, and experience through the senses is subject to change and decay. Yet beyond this changing world exists another principle — the conscious essence (chetan tattva). This conscious principle is non-material (aprākṛta), transcendent, and imperishable." },
      { type: "p", text: "In truth, there are only two fundamental realities in the universe: the non-conscious, and the conscious." },
      { type: "p", text: "The non-conscious reality is nature (prakṛti). It is perishable, born of ignorance (avidyā), and it binds the soul through attachment and illusion. The conscious reality exists in two expressions: God and the individual soul (jīva). Both are transcendental, divine, non-material, and free from birth and death. Both are endowed with infinite qualities." },
      { type: "h2", text: "The Soul as a Spark of the Divine" },
      { type: "p", text: "The individual soul is a portion of the Supreme Soul (Paramātmā). Vedāntic traditions may describe this relationship through different philosophical lenses — such as Dvaita, Advaita, Dvaitādvaita, Śuddhādvaita, and Viśiṣṭādvaita — yet all arrive at one shared truth: the soul is imperishable." },
      { type: "p", text: "The soul is by nature blissful, joyful, and full of happiness, because it arises from Brahman itself. Whether described as a part of Brahman or as Brahman's own expression, the essence remains the same." },
      { type: "p", text: "Just as a spark emerges from fire and can become a flame, the soul is like a spark of the Divine. Scripture illustrates its subtlety by saying that if the tip of a hair were divided into a hundred parts, and one of those parts divided again into a hundred, the remaining fraction would resemble the minuteness of the soul in relation to the Supreme." },
      { type: "h2", text: "Beyond the Senses, Known Through Grace" },
      { type: "p", text: "The soul is imperceptible and non-material. It cannot be seen through physical vision, nor grasped by the five senses. Gross material objects can be perceived, but subtle, non-material realities lie beyond sensory reach. For this reason, the soul is described as beyond mind, speech, and senses." },
      { type: "p", text: "Yet the soul is not unknowable. It is experienced inwardly, through refined awareness, and made directly realizable through the Grace of the True Guru. Unlike worldly objects, it does not appear easily before external vision, but it becomes known through inner awakening." },
      { type: "p", text: "The soul is aṇu-svarūpa — subtle in form — yet full of bliss, knowledge, peace, purity, and joy, because it is born of God, and God is supreme bliss and supreme love itself." },
      { type: "h2", text: "The Supreme One With Countless Forms" },
      { type: "p", text: "God is the embodiment of infinite divine love. For the welfare of devotees, God manifests countless divine qualities, all of which are transcendental and beyond material nature." },
      { type: "quote", text: "God is the doer, the sustainer, the supporter, and the bearer of all. There is nothing beyond Him. He alone is supreme. He alone is the giver of destiny. He alone delights His devotees through love." },
      { type: "p", text: "He is Rama, Krishna, Shiva, Shakti, Surya, and Ganesha. God is one, not many. His names are many. His forms are many. His actions are many. His divine play is beyond the reach of logic and reason." },
      { type: "p", text: "Those who rely solely on intellectual argument never reach the end of Him. God is known not through debate, but through devotion." },
      { type: "h2", text: "Divine Closeness and Accessibility" },
      { type: "p", text: "Among God's infinite qualities, two stand out for the devotee: supreme accessibility (saulabhya) and divine sweetness (mādhurya). Though God is supreme and transcendent, He is accessible to all. To a child, He becomes a child. To elders, He becomes an elder. To the wise, He becomes wisdom itself. To lovers of divine sweetness, He becomes the Beloved. To the brave, He becomes strength. To friends, He becomes a companion. To servants, He becomes the Master." },
      { type: "p", text: "He adapts perfectly to the inner disposition of the devotee. Thus, though supremely exalted, He is extraordinarily easy to approach." },
      { type: "h2", text: "The Guru as the Living Path" },
      { type: "p", text: "God is not like ego-driven worldly rulers. He is simple, compassionate, and accessible. No appointment is needed. No special timing is required. Whenever, wherever, and however one seeks Him, He is available." },
      { type: "p", text: "Yet there is one essential condition: God must be approached through the True Guru." },
      { type: "p", text: "The true Guru is rare. Those who collect disciples for money, exploit suffering, or promise liberation through symbols and appearances are not Gurus. In the authentic Vedic Sanātana tradition, the Guru stands within an unbroken Guru–disciple lineage, is properly initiated, firmly established in Brahman, detached, and devoted solely to leading others toward God." },
      { type: "p", text: "Blindly accepting anyone as Guru without discernment leads to self-deception. An unseeing guide and a blind follower both fall together." },
      { type: "h2", text: "The Work of the True Guru" },
      { type: "p", text: "A true Guru removes doubt, trains the disciple in proper spiritual discipline, and teaches the correct way of devotion. Such a Guru does not promise liberation through images or shortcuts. Instead, he instructs according to the Vedas." },
      { type: "p", text: "Scripture commands that one must approach the Guru with humility, offering oneself through mind, speech, and action. This surrender is not blind. The Guru examines the disciple's sincerity, obedience, effort, and steadiness of character." },
      { type: "p", text: "When these qualities are recognized, compassion arises in the Guru's heart. And the moment the Guru's compassionate glance falls upon the disciple, parā-bhakti — supreme devotion — awakens. This is the devotion we hear about. This is the devotion we practice. This is the devotion we strive to cultivate." },
    ],
  },

  /* ─────────────────────────────────────────────────────── */
  {
    id: "kundalini-chakras",
    title: "Kundalini, the Chakras, and the Inner Science of Awakening",
    tag: "Kundalini",
    date: "7 April 2025",
    thumbnail: `${b}images/teachings-kundalini.png`,
    excerpt:
      "In the Vedic Sanātana tradition, the human body is not merely a physical structure but a living field of consciousness. Siddhababa explains the seven chakras, Kundalini Shakti, and the inner science of awakening.",
    content: [
      { type: "p", text: "Siddhababa explains that in the Vedic Sanātana tradition, the human body is not merely a physical structure but a living field of consciousness, governed by subtle energies, channels, and centers of awareness. This inner science, preserved through yogic lineages, describes the presence of 72,000 nāḍīs (subtle channels) and tens of thousands of chakras through which prāṇa flows." },
      { type: "p", text: "Among these, sixteen principal and highly sensitive chakras hold special significance. Their awakening and refinement correspond to what the tradition calls the Ṣoḍaśa Saṁskāras — the sixteen sacred refinements that shape human life from birth to liberation. For practical understanding, this vast system is often summarized through the seven primary chakras (Sapta Chakra), which guide the journey from instinctual existence to divine realization." },
      { type: "h2", text: "Kuṇḍalinī: The Power That Sustains Creation" },
      { type: "p", text: "Kuṇḍalinī is not a metaphor, nor a dormant imagination. It is the fundamental conscious power through which creation arises, is sustained, and dissolves. She is the same supreme energy known by many sacred names — Bhagavatī, Devī, Sītā, Rādhā, Lakṣmī, Mahākālī, Mahālakṣmī — called differently yet one in essence." },
      { type: "p", text: "Kuṇḍalinī always exists in a state of awareness. She never sleeps. What is described as 'sleep' in yogic language refers only to her downward-facing orientation, which propels the cycle of repeated birth and death." },
      { type: "quote", text: "Punarapi jananam, punarapi maraṇam — Again and again birth, again and again death." },
      { type: "p", text: "When her orientation turns upward through grace, purity, devotion, and inner discipline, the same force becomes the cause of awakening, knowledge, and liberation." },
      { type: "h2", text: "Mūlādhāra Chakra: The Root of Life and Death" },
      { type: "p", text: "Among the seven principal chakras, the Mūlādhāra Chakra is the foundation. Located at the center between the organs of excretion, it is the root support of life itself. The word mūla means root — the source from which all growth arises." },
      { type: "list", items: ["Square in form", "Yellow in color", "Associated with the earth element", "Empowered by the Laṁ bīja mantra"] },
      { type: "p", text: "At its center resides the Svayambhū Liṅga, around which Kuṇḍalinī is coiled three and a half times, facing downward. In this state, life is driven by instinct, fear, desire, and survival. As long as Kuṇḍalinī remains downward-facing, the individual remains bound to repeated birth and death." },
      { type: "h2", text: "Kuṇḍalinī Awakening: The Turning Point" },
      { type: "p", text: "When Kuṇḍalinī turns upward through Guru's grace, pure conduct, pure thought, love, and sincere spiritual practice, this reversal is called Kuṇḍalinī Jāgaraṇa — awakening. At that moment, the human being naturally inclines toward truth and higher knowledge." },
      { type: "quote", text: "Lead me from untruth to truth, from darkness to light, from death to immortality." },
      { type: "p", text: "Thoughts become purified. Compassion, joy, wisdom, love, and clarity begin to arise. The ascent then continues through the higher chakras." },
      { type: "h2", text: "The Seven Chakras: A Summary" },
      { type: "h3", text: "Svādhiṣṭhāna — The Realm of Sensitivity" },
      { type: "p", text: "Located below the navel, the Svādhiṣṭhāna Chakra governs the water element and is extremely sensitive. Here, emotions, desires, and creative impulses are refined. When purified, this chakra becomes a gateway from instinctual craving to conscious experience." },
      { type: "h3", text: "Maṇipūra — Fire, Vitality, and Mastery" },
      { type: "p", text: "Situated at the navel, the Maṇipūra Chakra is the center of the fire element and personal power. When awakened, vitality increases, the body becomes strong and radiant, and one gains clarity, courage, and longevity." },
      { type: "h3", text: "Anāhata — The Seat of the Soul" },
      { type: "p", text: "The Anāhata Chakra, at the center of the chest, is the dwelling place of the jīvātman — the individual soul. When purified, compassion becomes effortless, devotion deepens, and direct experience of the Divine becomes possible." },
      { type: "h3", text: "Viśuddha — Purity, Knowledge, and Expression" },
      { type: "p", text: "Located in the throat, the Viśuddha Chakra governs the ether element. Its awakening bestows clarity of speech, profound listening, and aspiration for liberation." },
      { type: "h3", text: "Ājñā — Command and Inner Vision" },
      { type: "p", text: "The Ājñā Chakra, between the eyebrows, is the center of direct perception. When awakened, one realizes Oṁ, gains true knowledge of reality, and rises beyond duality." },
      { type: "h3", text: "Sahasrāra — Fulfillment of Human Birth" },
      { type: "p", text: "The Sahasrāra Chakra, the thousand-petaled lotus at the crown, is the culmination of the yogic journey. When it awakens, the jīva becomes Śiva and the human becomes Nārāyaṇa. The purpose of birth is fulfilled." },
      { type: "h2", text: "A Living, Experiential Science" },
      { type: "p", text: "This knowledge is not theoretical or imagined. It arises from direct yogic experience, preserved through traditional lineages. The teachings of Kuṇḍalinī and the chakras are precise, experiential, and scientific within their own domain." },
      { type: "p", text: "They are not meant for curiosity alone, but for inner transformation. Those who walk this path with sincerity, discipline, and grace do not merely learn about awakening. They become awakened." },
    ],
  },

  /* ─────────────────────────────────────────────────────── */
  {
    id: "nepal-sacred-geography",
    title: "Nepal: Spirituality's Beating Heart",
    subtitle: "The Living Sacred Geography of the Himalayas",
    tag: "Sacred Geography",
    date: "1 April 2025",
    thumbnail: `${b}images/teachings-nepal.png`,
    excerpt:
      "Nepal is described in sacred traditions as a land where the divine is not distant but actively present. In this teaching, Siddhababa reveals Nepal as Bhū-Vaikuṇṭha — an earthly expression of the divine realm.",
    content: [
      { type: "p", text: "Nepal is described in the sacred traditions as a land where the divine is not distant but actively present. According to Vedic traditions, the world includes eight Vaikuṇṭhas — divine realms where the Supreme is said to dwell. One of these Vaikuṇṭhas is believed to exist on earth itself." },
      { type: "p", text: "This earthly Vaikuṇṭha is identified with the Himalayas — specifically the Hemakuṭa Himalaya, also known as Bhū-Vaikuṇṭha, meaning 'Vaikuṇṭha on earth.' From this perspective, Nepal is not merely a country defined by borders and history. It is seen as a visible expression of a sacred realm, where geography itself carries spiritual meaning." },
      { type: "h2", text: "A Sacred Map of the Himalaya" },
      { type: "p", text: "Traditional texts describe the Himalayan region as being divided into four sacred zones: Mānas Khaṇḍa, Hemavat Khaṇḍa, Kedāra Khaṇḍa, and Āryāvarta. Hemavat Khaṇḍa is considered central among them. Within this vast sacred landscape lies a continuous field of pilgrimage stretching from Mānasarovar and Kailāśa to Badarīnātha." },
      { type: "h2", text: "The Earth as a Living Body" },
      { type: "p", text: "In this worldview, geography is not inert matter. Just as the human body contains subtle pathways and lines of energy, the Himalayan land is described as mirroring a divine form. Nepal is seen as the visible portion of Bhū-Vaikuṇṭha — a place where the sacred becomes tangible." },
      { type: "p", text: "The land is described as tri-energetic, where Hari, Hara, and Śakti converge. It is revered as the land of Bhagavatī Pārvatī and as the place where Sītā appeared in embodied form." },
      { type: "h2", text: "Mountains, Stones, and Rivers as Sacred Presence" },
      { type: "p", text: "The mountains of the Himalaya are traditionally seen as manifestations of Lord Śiva in meditation. The stones of the land — especially the dark stones known as Śālagrāma — are revered as sacred forms of Śrī Hari Viṣṇu. Those found in the Gandakī region are regarded as especially sanctified." },
      { type: "p", text: "The Gandakī River holds a unique place in this tradition. Water that has washed a Śālagrāma is known as Śaraṇāmṛta — sacred water associated with protection and refuge. The river is believed not only to cleanse these stones but to shape and refine them, making them fit for worship. The soil itself is also revered — it is described as the source from which divine feminine energies manifest, the very earth from which Sītā emerged." },
      { type: "h2", text: "A Land Shaped by Divine Culture" },
      { type: "p", text: "Traditional teachings describe creation as unfolding through two natures — divine and demonic — and two corresponding ways of life. Nepal is described as a land shaped by divine culture, where spiritual refinement takes precedence over domination or conquest." },
      { type: "p", text: "Of the twenty-four incarnations of Lord Hari, fourteen are said to have manifested on this land. Among them are sages such as Nārada, Ṛṣabhadeva, Vyāsa, Śuka, and Sanaka — remembered not simply as historical teachers, but as embodiments of wisdom who appeared for the well-being of the world." },
      { type: "h2", text: "Muktinātha and the First Sacred Offering" },
      { type: "p", text: "Muktinātha holds a special place in this sacred geography. According to tradition, when Brahmā began the work of creation, the first yajña — sacred offering — for the welfare of the universe was performed here. After the revelation of the Vedas, creation itself is said to have unfolded through this primordial act." },
      { type: "p", text: "Even today, a natural flame burns at Muktinātha. While it may be explained scientifically, tradition understands it as the continuing presence of Brahmā's yajña fire. The installation of Lord Muktinātha is traditionally attributed to Śrī Rāma, further affirming the site's sacred status." },
      { type: "h2", text: "The Himalaya as a Living Sanctuary" },
      { type: "p", text: "The Himalaya is also described as the dwelling place of realized beings and immortal sages. Gandhamādana Mountain, between Dhaulāgiri and Annapūrṇā, is associated with Hanumān. The sources of the seven Gandakī rivers are said to be inhabited by the seven sages. Sanakādi sages, Gorakṣanātha, and the eighty-four Siddhas are believed to dwell within these Himalayan regions, making the land both a place of pilgrimage and of continuous spiritual presence." },
      { type: "h2", text: "Remembering the Deeper Meaning" },
      { type: "p", text: "To see Nepal as Bhū-Vaikuṇṭha is not simply to adopt a belief. It is to recognize a way of relating to land, life, and one another. Earth, water, fire, mountain, and humanity are understood as participating in a continuous relationship with the Divine." },
      { type: "p", text: "For those who live here, and for those who encounter Nepal through its teachings and landscapes, this perspective offers a reminder. This land is not only to be inhabited or visited, but to be remembered, respected, and lived with awareness — as a place that carries a living spiritual heritage." },
    ],
  },

  /* ─────────────────────────────────────────────────────── */
  {
    id: "what-is-prana",
    title: "What Is Prāṇa?",
    subtitle: "A Yogic Science of Life, Consciousness, and Vital Force",
    tag: "Yoga",
    date: "25 March 2025",
    thumbnail: `${b}images/teachings-article-2.png`,
    excerpt:
      "Prāṇa is the fundamental force that animates life — not merely breath or oxygen, but the intelligent vitality that sustains the body, activates the mind, and serves as the bridge between matter and consciousness.",
    content: [
      { type: "p", text: "Siddhababa explains that prāṇa is the fundamental force that animates life. It is not merely breath, oxygen, or physical energy, though it expresses itself through all of these. Prāṇa is life-force — the intelligent vitality that sustains the body, activates the mind, and serves as the bridge between matter and consciousness." },
      { type: "quote", text: "Where there is prāṇa, there is life. Where prāṇa withdraws, life dissolves." },
      { type: "h2", text: "Prāṇa Is Not Just Breath" },
      { type: "p", text: "Breath (śvāsa–praśvāsa) is the gross expression of prāṇa, but prāṇa itself is subtler. A person may breathe yet feel lifeless, dull, or depressed. Another may sit silently, barely breathing, yet radiate vitality and clarity. The difference lies in the state of prāṇa." },
      { type: "p", text: "Yogic science teaches that prāṇa flows through subtle channels (nāḍīs) and concentrates at energy centers (chakras). The quality, direction, and refinement of prāṇa determine physical health, emotional stability, mental clarity, moral strength, and spiritual awakening." },
      { type: "h2", text: "The Five Primary Functions of Prāṇa" },
      { type: "p", text: "Prāṇa does not operate as a single current. It expresses itself through five primary movements:" },
      { type: "list", items: [
        "Prāṇa – governing inhalation, vitality, and forward movement",
        "Apāna – governing elimination, grounding, and downward flow",
        "Samāna – governing digestion, assimilation, and balance",
        "Udāna – governing upward movement, speech, growth, and spiritual ascent",
        "Vyāna – governing circulation, coordination, and integration",
      ]},
      { type: "p", text: "When these five are harmonious, the human being is healthy, luminous, and stable. When they are disturbed, disorder manifests in body and mind." },
      { type: "h2", text: "Prāṇa and Consciousness" },
      { type: "p", text: "Prāṇa is not consciousness itself, but it is the vehicle of consciousness within the body. Just as electricity powers a lamp without being the light itself, prāṇa enables awareness, thought, intention, and action to manifest through the human system." },
      { type: "p", text: "This is why yogic texts state that mastery of prāṇa leads naturally to mastery of the mind. When prāṇa becomes refined and directed upward, consciousness expands." },
      { type: "h2", text: "Prāṇa and Conduct" },
      { type: "p", text: "Unlike modern views that limit energy to physical processes, Sanātana Dharma teaches that conduct directly affects prāṇa:" },
      { type: "list", items: [
        "Respect refines prāṇa",
        "Humility stabilizes prāṇa",
        "Discipline strengthens prāṇa",
        "Arrogance scatters prāṇa",
        "Disrespect violently disturbs prāṇa",
      ]},
      { type: "p", text: "Thus, prāṇa is shaped not only by breath and posture, but by how one lives, how one speaks, and how one relates to elders, teachers, saints, and society." },
      { type: "h2", text: "Prāṇa and Liberation" },
      { type: "p", text: "The ultimate aim of yogic practice is the ascent of prāṇa through the central channel (Suṣumṇā) — from the base of the spine (Mūlādhāra) to the crown (Sahasrāra). This ascent is liberation while living (jīvanmukti)." },
      { type: "p", text: "When prāṇa rises, instinct transforms into wisdom, effort dissolves into clarity, and the individual sense (jīva) merges into universal consciousness. Thus, prāṇa is not merely life-force — it is the path, the process, and the power of realization itself." },
    ],
  },

  /* ─────────────────────────────────────────────────────── */
  {
    id: "refine-prana",
    title: "How to Refine Prāṇa",
    subtitle: "Practical guidance for daily life and sādhana",
    tag: "Practice",
    date: "18 March 2025",
    thumbnailGradient: "from-[#3a5a2a] to-[#1a2e10]",
    excerpt:
      "Prāṇa is refined not only through formal yogic techniques, but through how one lives, sits, breathes, speaks, and relates. Jagadguru Mahayogi Siddhababa offers seven foundational practices accessible to all sincere seekers.",
    content: [
      { type: "p", text: "Prāṇa is refined not only through formal yogic techniques, but through how one lives, sits, breathes, speaks, and relates. Yogic science emphasizes simplicity and consistency over complexity. The following practices are foundational and accessible to all sincere seekers." },
      { type: "h2", text: "1. Begin with Conduct and Reverence" },
      { type: "p", text: "The refinement of prāṇa begins with ācāra (right conduct)." },
      { type: "list", items: ["Greet elders respectfully", "Revere parents, teachers, and Gurus", "Speak with humility and restraint", "Avoid insulting or belittling others, especially saints and teachers"] },
      { type: "p", text: "These actions stabilize and purify prāṇa immediately. Prāṇa is more consolidated and established in those who are elder — hence, reverence softens inner resistance and allows prāṇa to move upward naturally. Respect is subtle prāṇāyāma." },
      { type: "h2", text: "2. Keep the Body Upright and Alert" },
      { type: "p", text: "Posture has a direct effect on prāṇa. Sit and stand with the spine straight. Keep the chest gently lifted. Avoid collapsing the torso or slouching. An upright posture allows prāṇa to rise and induces a natural, subtle kumbhaka (retention). This strengthens endurance, clarity, and inner steadiness. Even without formal practice, simply correcting posture throughout the day refines prāṇa significantly." },
      { type: "h2", text: "3. Observe the Breath Without Forcing It" },
      { type: "p", text: "Prāṇa follows awareness. Gently observe inhalation and exhalation. Do not manipulate the breath forcefully. Notice how thoughts arise with inhalation and dissolve with exhalation. This observation gradually harmonizes Iḍā and Piṅgalā (the lunar and solar channels) and calms mental agitation. Over time, prāṇāyāma begins to occur naturally." },
      { type: "h2", text: "4. Steady the Gaze" },
      { type: "p", text: "The gaze influences prāṇa and mind. Keep the gaze soft and steady. Occasionally bring attention to the tip of the nose or between the eyebrows. Avoid restless eye movement. When the gaze becomes steady, prāṇa stabilizes. When prāṇa stabilizes, thoughts subside. This practice can be done while sitting, walking, or standing." },
      { type: "h2", text: "5. Regulate Intention (Saṅkalpa)" },
      { type: "p", text: "Every breath carries intention. Notice recurring thought patterns. Replace agitation with auspicious resolve. Cultivate goodwill rather than resistance. Prāṇa becomes refined when intention is refined. Over time, this reshapes saṃskāra (inner impressions) and character itself." },
      { type: "h2", text: "6. Practice Humble Stillness Daily" },
      { type: "p", text: "Set aside a short period each day — 5 to 15 minutes — to sit quietly. Sit upright. Let the breath flow naturally. Observe the mind without judgment. Return gently to awareness whenever distracted. Stillness allows scattered prāṇa to recollect itself. This simple daily sitting is more powerful than irregular intense techniques." },
      { type: "h2", text: "7. Seek the Shelter of the Wise" },
      { type: "p", text: "The most powerful refinement of prāṇa occurs through association with realized beings. Sit in the presence of saints or sincere practitioners. Listen with receptivity. Offer service where possible. When one becomes inwardly receptive to a great soul, prāṇa is uplifted effortlessly. What takes years through personal effort may unfold naturally through grace." },
      { type: "h2", text: "A Closing Reminder" },
      { type: "p", text: "Refinement of prāṇa is not achieved through strain, ambition, or force. It unfolds through discipline, humility, awareness, and grace. Small daily corrections, practiced consistently, transform the entire being." },
    ],
  },

  /* ─────────────────────────────────────────────────────── */
  {
    id: "two-realities",
    title: "Two Realities: Conscious and Non-conscious",
    subtitle: "Understanding what we truly are",
    tag: "Vedanta",
    date: "10 March 2025",
    thumbnail: `${b}images/teachings-article-3.png`,
    excerpt:
      "To understand why suffering persists and where true happiness lies, we must first understand the most fundamental distinction in existence: the conscious and the non-conscious. Everything else arises from this distinction.",
    content: [
      { type: "p", text: "To understand why suffering persists and where true happiness lies, we must first understand the most fundamental distinction in existence. According to the wisdom of Vedanta, there are only two realities in this universe: the conscious and the non-conscious. Everything else arises from this distinction." },
      { type: "p", text: "The non-conscious includes the entire world we experience through the senses. What we see, hear, taste, touch, and smell all belong to this category. They are experienced, but they do not experience. They have no awareness of their own." },
      { type: "p", text: "The body itself also belongs to this category. Though it appears alive and responsive, the body is inert by nature. It moves, reacts, and functions only because consciousness resides within it. When that consciousness leaves, the body becomes a lifeless form." },
      { type: "p", text: "Even the mind — which feels so intimate and personal — is not consciousness itself. Thoughts arise, images appear, memories surface, imaginations unfold, but the mind is an instrument, not the witness. The mind changes constantly. That which observes these changes cannot itself be changing in the same way. The observer is different from the observed." },
      { type: "h2", text: "The Conscious Reality" },
      { type: "p", text: "The conscious reality is the soul — the ātma. It is the principle that knows, that experiences, that witnesses. The soul does not age, decay, or change with circumstances. Pleasure and pain arise in the mind and body, but the soul remains untouched by them. This is why, even in moments of intense emotion, there is always a subtle awareness that knows, 'I am experiencing this.'" },
      { type: "p", text: "There is also the Supreme Consciousness — the source of all awareness, which we call God. The soul is not separate from this Supreme Consciousness in essence. It is a portion, a reflection, a spark of the same reality. Just as a spark has the nature of fire, the soul has the nature of consciousness. The difference is not in quality, but in expression." },
      { type: "h2", text: "The Root of Suffering" },
      { type: "p", text: "Because we mistake the non-conscious for our true self, we suffer. We say, 'I am the body,' and fear aging and death. We say, 'I am the mind,' and become trapped in anxiety and desire. We say, 'I am my role, my status, my relationships,' and feel shattered when they change. But none of these are truly who we are." },
      { type: "p", text: "This misunderstanding shapes how we live. We try to fix suffering by rearranging the external world. We seek comfort, security, and validation through objects, achievements, and recognition. But since the external world is non-conscious and ever-changing, it cannot provide lasting fulfillment." },
      { type: "h2", text: "The Beginning of Freedom" },
      { type: "p", text: "True happiness arises when consciousness recognizes itself. It is not created. It is revealed. It does not depend on circumstances. It does not increase with gain or decrease with loss. When we begin to see ourselves as the witness rather than the object, something profound changes. We still act in the world, but we are no longer bound by it in the same way." },
      { type: "p", text: "Knowing this distinction does not make life dry or detached. It makes life lighter and more meaningful. Pleasure can be enjoyed without clinging. Pain can be faced without despair. Relationships can be lived with love rather than fear. Action becomes more skillful because it is no longer driven by confusion about identity." },
      { type: "p", text: "The purpose of human life is not to perfect the non-conscious world, but to awaken to the conscious truth within it. When this understanding deepens, suffering loses its grip. We no longer try to extract permanent joy from impermanent things. Instead, we rest in the awareness that was always present, quietly witnessing every experience. This recognition marks the beginning of freedom." },
    ],
  },

  /* ─────────────────────────────────────────────────────── */
  {
    id: "world-cannot-satisfy",
    title: "Why the World Can't Satisfy the Heart",
    subtitle: "The lesson of the dog and the dry bone",
    tag: "Vedanta",
    date: "1 March 2025",
    thumbnailGradient: "from-[#5a2a0a] to-[#1a0c03]",
    excerpt:
      "Every living being wants happiness — yet despite this shared longing, suffering continues everywhere. Jagadguru Mahayogi Siddhababa illuminates why the world cannot provide what only awareness can offer.",
    content: [
      { type: "p", text: "Every living being wants happiness. This is not unique to humans. Even a fly, even an ant, even a mosquito acts with one purpose in mind: to preserve its life and experience some form of comfort or pleasure. This instinct reveals a universal truth. Life is dear to all, and happiness is sought by all." },
      { type: "p", text: "Yet despite this shared longing, suffering continues everywhere. People lie, steal, work endlessly, compromise their values, or push past boundaries — all in the name of happiness. The tragedy is not in wanting happiness. The tragedy is in where we look for it." },
      { type: "h2", text: "The Lesson of the Dog and the Dry Bone" },
      { type: "p", text: "A simple teaching illustrates this mistake powerfully. A dog finds a dry bone and sits in a corner chewing it eagerly. The bone is hard and sharp, and as the dog chews, it cuts its gums. Blood begins to flow from the dog's mouth and sticks to the bone. The dog tastes the blood and thinks the bone itself is producing something delicious. Encouraged, it chews even harder. The more it chews, the more it bleeds. Eventually, pain forces the dog to stop — but by then its gums are wounded." },
      { type: "p", text: "The illusion is subtle and devastating. The dog believes the pleasure is coming from the bone. In reality, the sweetness it tastes comes from its own blood. The bone gives nothing. It only takes." },
      { type: "p", text: "This is how worldly happiness works. We attach ourselves to objects, achievements, relationships, and experiences, believing they are the source of joy. When pleasure arises, we assume the world has given it to us, so we cling tighter, chase harder, and sacrifice more. But the joy we feel does not come from outside. It arises from within — from our own consciousness, briefly reflected through an experience. The world merely triggers it." },
      { type: "h2", text: "The Pattern in All Pursuits" },
      { type: "p", text: "Marriage is often imagined as a gateway to happiness. Children are expected to complete life. Success is expected to bring peace. For a moment, celebration feels intoxicating. But soon, quarrels arise, expectations clash, attachments tighten, and sorrow enters." },
      { type: "p", text: "Even spiritual pursuits can fall into the same trap. People try meditation after meditation, discipline after discipline, believing that a new technique will finally deliver peace. Breath practices, postures, visualizations, and concentration methods are tried in endless combinations. Yet without understanding the deeper truth, dissatisfaction remains. Technique alone does not free the heart." },
      { type: "h2", text: "The Real Source of Happiness" },
      { type: "p", text: "Why does this happen? Because happiness is not an object. It is not an experience created by circumstances. It is not something the world can store and hand over. The world is impermanent by nature. The body itself is impermanent. Hunger hurts. Excess hurts. Sleeplessness hurts. Even comfort creates discomfort when it changes. Seeking permanence in what is temporary leads to frustration again and again." },
      { type: "p", text: "True happiness does not arise from acquiring. It arises from understanding. Until we understand what we are, what the world is, and where joy truly comes from, dissatisfaction continues no matter how much we achieve. Consciousness is the source of happiness — not the objects it momentarily illuminates." },
      { type: "h2", text: "The Choice Before Us" },
      { type: "p", text: "The dog eventually drops the bone because pain becomes unbearable. A human being has a greater opportunity. We can drop the bone because of wisdom. We can see through the illusion before it wounds us deeply." },
      { type: "p", text: "The moment we stop blaming the world for failing us, and instead question our assumptions, the search turns inward. When we see that joy arises from awareness itself — not from possessions or positions — the grip of craving loosens. Life becomes lighter. Pleasure no longer deceives. Pain no longer terrifies. We stop demanding that the world satisfy the heart, and instead allow understanding to guide us. That recognition marks the beginning of freedom." },
    ],
  },
];

export function getArticleById(id: string): Article | undefined {
  return ARTICLES.find(a => a.id === id);
}
