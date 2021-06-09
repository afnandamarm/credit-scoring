(function (d) {
  'use strict'

  const listProvinces = [
    [0, 'Aceh', [
      'Kab. Aceh Barat',
      'Kab. Aceh Barat Daya',
      'Kab. Aceh Besar',
      'Kab. Aceh Jaya',
      'Kab. Aceh Selatan',
      'Kab. Aceh Singkil',
      'Kab. Aceh Tamiang',
      'Kab. Aceh Tengah',
      'Kab. Aceh Tenggara',
      'Kab. Aceh Timur',
      'Kab. Aceh Utara',
      'Kab. Bener Meriah',
      'Kab. Bireuen',
      'Kab. Gayo Lues',
      'Kab. Nagan Raya',
      'Kab. Pidie',
      'Kab. Pidie Jaya',
      'Kab. Simeulue',
      'Kota. Banda Aceh',
      'Kota. Lhokseumawe',
      'Kota. Sabang',
      'Kota. Subulussalam'
    ]],
    [1, 'Bali', [
      'Kab. Badung',
      'Kab. Bangli',
      'Kab. Buleleng',
      'Kab. Gianyar',
      'Kab. Jembrana',
      'Kab. Karangasem',
      'Kab. Klungkung',
      'Kab. Tabanan',
      'Kota. Denpasar'
    ]],
    [2, 'Banten', [
      'Kab. Lebak',
      'Kab. Pandeglang',
      'Kab. Serang',
      'Kab. Tangerang',
      'Kota. Cilegon',
      'Kota. Serang',
      'Kota. Tangerang',
      'Kota. Tangerang Selatan'
    ]],
    [3, 'Bengkulu', [
      'Kota. Bengkulu',
      'Kab. Bengkulu Tengah',
      'Kab. Bengkulu Selatan',
      'Kab. Bengkulu Utara',
      'Kab. Kaur',
      'Kab. Kepahiang',
      'Kab. Lebong',
      'Kab. Rejang Lebong',
      'Kab. Muko Muko',
      'Kab. Seluma'
    ]],
    [4, 'Daerah Istimewa Yogyakarta', [
      'Kota. Yogyakarta',
      'Kab. Bantul',
      'Kab. Sleman',
      'Kab. Kulon Progo',
      'Kab. Gunungkidul'
    ]],
    [5, 'DKI Jakarta', [
      'Kab. Kepulauan Seribu',
      'Kota. Jakarta Barat',
      'Kota. Jakarta Pusat',
      'Kota. Jakarta Selatan',
      'Kota. Jakarta Timur',
      'Kota. Jakarta Utara'
    ]],
    [6, 'Gorontalo', [
      'Kab. Boalemo',
      'Kab. Bone Bolango',
      'Kab. Gorontalo',
      'Kab. Gorontalo Utara',
      'Kab. Pohuwato',
      'Kota. Gorontalo'
    ]],
    [7, 'Jambi', [
      'Kab. Batanghari',
      'Kab. Bungo',
      'Kab. Kerinci',
      'Kab. Merangin',
      'Kab. Muaro Jambi',
      'Kab. Sarolangun',
      'Kab. Tanjung Jabung Barat',
      'Kab. Tanjung Jabung Timur',
      'Kab. Tebo',
      'Kota. Jambi',
      'Kota. Sungai Penuh'
    ]],
    [8, 'Jawa Barat', [
      'Kab. Bandung',
      'Kab. Bandung Barat',
      'Kab. Bekasi',
      'Kab. Bogor',
      'Kab. Ciamis',
      'Kab. Cianjur',
      'Kab. Cirebon',
      'Kab. Garut',
      'Kab. Indramayu',
      'Kab. Karawang',
      'Kab. Kuningan',
      'Kab. Majalengka',
      'Kab. Pangandaran',
      'Kab. Purwakarta',
      'Kab. Subang',
      'Kab. Sukabumi',
      'Kab. Sumedang',
      'Kab. Tasikmalaya',
      'Kota. Bandung',
      'Kota. Banjar',
      'Kota. Bekasi',
      'Kota. Bogor',
      'Kota. Cimahi',
      'Kota. Cirebon',
      'Kota. Depok',
      'Kota. Sukabumi',
      'Kota. Tasikmalaya'
    ]],
    [9, 'Jawa Tengah', [
      'Kab. Banjarnegara',
      'Kab. Banyumas',
      'Kab. Batang',
      'Kab. Blora',
      'Kab. Boyolali',
      'Kab. Brebes',
      'Kab. Cilacap',
      'Kab. Demak',
      'Kab. Grobogan',
      'Kab. Jepara',
      'Kab. Karanganyar',
      'Kab. Kebumen',
      'Kab. Kendal',
      'Kab. Klaten',
      'Kab. Kudus',
      'Kab. Magelang',
      'Kab. Pati',
      'Kab. Pekalongan',
      'Kab. Pemalang',
      'Kab. Purbalingga',
      'Kab. Purworejo',
      'Kab. Rembang',
      'Kab. Semarang',
      'Kab. Sragen',
      'Kab. Sukoharjo',
      'Kab. Tegal',
      'Kab. Temanggung',
      'Kab. Wonogiri',
      'Kab. Wonosobo',
      'Kota. Magelang',
      'Kota. Pekalongan',
      'Kota. Salatiga',
      'Kota. Semarang',
      'Kota. Surakarta',
      'Kota. Tegal'
    ]],
    [10, 'Jawa Timur', [
      'Kab. Bangkalan',
      'Kab. Banyuwangi',
      'Kab. Blitar',
      'Kab. Bojonegoro',
      'Kab. Bondowoso',
      'Kab. Gresik',
      'Kab. Jember',
      'Kab. Jombang',
      'Kab. Kediri',
      'Kab. Lamongan',
      'Kab. Lumajang',
      'Kab. Madiun',
      'Kab. Magetan',
      'Kab. Malang',
      'Kab. Mojokerto',
      'Kab. Nganjuk',
      'Kab. Ngawi',
      'Kab. Pacitan',
      'Kab. Pamekasan',
      'Kab. Pasuruan',
      'Kab. Ponorogo',
      'Kab. Probolinggo',
      'Kab. Sampang',
      'Kab. Sidoarjo',
      'Kab. Situbondo',
      'Kab. Sumenep',
      'Kab. Trenggalek',
      'Kab. Tuban',
      'Kab. Tulungagung',
      'Kota. Batu',
      'Kota. Blitar',
      'Kota. Kediri',
      'Kota. Madiun',
      'Kota. Malang',
      'Kota. Mojokerto',
      'Kota. Pasuruan',
      'Kota. Probolinggo',
      'Kota. Surabaya'
    ]],
    [11, 'Kalimantan Barat', [
      'Kab. Bengkayang',
      'Kab. Kapuas hulu',
      'Kab. Kayong Utara',
      'Kab. Ketapang',
      'Kab. Kubu Raya',
      'Kab. Landak',
      'Kab. Melawi',
      'Kab. Mempawah',
      'Kab. Sambas',
      'Kab. Sanggau',
      'Kab. Sekadau',
      'Kab. Sintang',
      'Kota. Pontianak',
      'Kota. Singkawang'
    ]],
    [12, 'Kalimantan Selatan', [
      'Kab. Balangan',
      'Kab. Banjar',
      'Kab. Barito Kuala',
      'Kab. Hulu Sungai Selatan',
      'Kab. Hulu Sungai Tengah',
      'Kab. Hulu Sungai Utara',
      'Kab. Kotabaru',
      'Kab. Tabalong',
      'Kab. Tanah Bumbu',
      'Kab. Tanah Laut',
      'Kab. Tapin',
      'Kota. Banjarbaru',
      'Kota. Banjarmasin'
    ]],
    [13, 'Kalimantan Tengah', [
      'Kab. Barito Selatan',
      'Kab. Barito Timur',
      'Kab. Barito Utara',
      'Kab. Gunung Mas',
      'Kab. Kapuas',
      'Kab. Katingan',
      'Kab. Kotawaringin Barat',
      'Kab. Kotawaringin Timur',
      'Kab. Lamandau',
      'Kab. Murung Raya',
      'Kab. Pulang Pisau',
      'Kab. Sukamar',
      'Kab. Seruyan',
      'Kota. Palangka Raya'
    ]],
    [14, 'Kalimantan Timur', [
      'Kab. Berau',
      'Kab. Kutai Barat',
      'Kab. Kutai Kartanegara',
      'Kab. Kutai Timur',
      'Kab. Mahakam Ulu',
      'Kab. Paser',
      'Kab. Penajam Paser Utara',
      'Kota. Balikpapan',
      'Kota. Bontang',
      'Kota. Samarinda'
    ]],
    [15, 'Kalimantan Utara', [
      'Kab. Bulungan',
      'Kab. Malinau',
      'Kab. Nunukan',
      'Kab. Tana Tidung',
      'Kota. Tarakan'
    ]],
    [16, 'Kep. Bangka Belitung', [
      'Kab. Bangka',
      'Kab. Bangka Barat',
      'Kab. Bangka Selatan',
      'Kab. Bangka Tengah',
      'Kab. Belitung',
      'Kab. Belitung Timur',
      'Kota Pangkalpinang'
    ]],
    [17, 'Kep. Riau', [
      'Kab. Bintan',
      'Kab. Karimun',
      'Kab. Kepulauan Anambas',
      'Kab. Lingga',
      'Kab. Natuna',
      'Kota. Batam',
      'Kota. Tanjungpinang'
    ]],
    [18, 'Lampung', [
      'Kab. Lampung Barat',
      'Kab. Lampung Selatan',
      'Kab. Lampung Tengah',
      'Kab. Lampung Timur',
      'Kab. Lampung Utara',
      'Kab. Mesuji',
      'Kab. Pesawaran',
      'Kab. Pesisir Barat',
      'Kab. Pringsewu',
      'Kab. Tanggamus',
      'Kab. Tulang Bawang',
      'Kab. Tulang Bawang Barat',
      'Kab. Way Kanan',
      'Kota. Bandar Lampung',
      'Kota. Metro'
    ]],
    [19, 'Maluku', [
      'Kab. Buru',
      'Kab. Buru Selatan',
      'Kab. Kepulauan Aru',
      'Kab. Maluku Barat Daya',
      'kab. Maluku Tengah',
      'Kab. Maluku Tenggara',
      'Kab. Kepulauan Tanimbar',
      'Kab. Seram Bagian Barat',
      'Kab. Seram Bagian Timur',
      'Kota. Ambon',
      'Kota Tual'
    ]],
    [20, 'Maluku Utara', [
      'Kab. Halmahera Barat',
      'Kab. Halmahera Tengah',
      'Kab. Halmahera Timur',
      'Kab. Halmahera Selatan',
      'Kab. Halmahera Utara',
      'Kab. Kepulauan Sula',
      'Kab. Pulau Morotai',
      'Kab. Pulau Taliabu',
      'Kota. Ternate',
      'Kota. Tidore Kepulauan'
    ]],
    [21, 'Nusa Tenggara Barat', [
      'Kab. Bima',
      'Kab. Dompu',
      'Kab. Lombok Barat',
      'Kab. Lombok Tengah',
      'Kab. Lombok Timur',
      'Kab. Lombok Utara',
      'Kab. Sumbawa',
      'Kab. Sumbawa Barat',
      'Kota. Bima',
      'Kota. Mataram'
    ]],
    [22, 'Nusa Tenggara Timur', [
      'Kab. Alor',
      'Kab. Belu',
      'Kab. Ende',
      'Kab. Flores Timur',
      'Kab. Kupang',
      'Kab. Lembata',
      'Kab. Malaka',
      'Kab. Manggarai',
      'Kab. Manggarai Barat',
      'Kab. Manggarai Timur',
      'Kab. Nagekeo',
      'Kab. Ngada',
      'Kab. Rote Ndao',
      'Kab. Sabu Raijua',
      'Kab. Sikka',
      'Kab. Sumba Barat',
      'Kab. Sumba Barat Daya',
      'Kab. Sumba Tengah',
      'Kab. Sumba Timur',
      'Kab. Timor Tengah Selatan',
      'Kab. Timor Tengah Utara',
      'Kota. Kupang'
    ]],
    [23, 'Papua', [
      'Kab. Asmat',
      'Kab. Biak Numfor',
      'Kab. Boven Dogoel',
      'Kab. Deiyai',
      'Kab. Dogiyai',
      'Kab. Intan Jaya',
      'Kab. Jayapura',
      'Kab. Jayawijaya',
      'Kab. Keerom',
      'Kab. Kepulauan Yapen',
      'Kab. Lanny Jaya',
      'Kab. Mamberamo Raya',
      'Kab. Mamberamo Tengah',
      'Kab. Mappi',
      'Kab. Merauke',
      'Kab. Mimika',
      'Kab. Nabire',
      'Kab. Nduga',
      'Kab. Paniai',
      'Kab. Pegunungan Bintang',
      'Kab. Puncak',
      'Kab. Puncak Jaya',
      'Kab. Sarmi',
      'Kab. Supiori',
      'Kab. Tolikara',
      'Kab. Waropen',
      'Kab. Yahukimo',
      'Kab. Yalimo',
      'Kota. Jayapura'
    ]],
    [24, '92', 'Papua Barat', [
      'Kab. Fakfak',
      'Kab. Kaimana',
      'Kab. Manokwari',
      'Kab. Manokwari Selatan',
      'Kab. Maybrat',
      'Kab. Pegunungan Arfak',
      'Kab. Raja Ampat',
      'Kab. Sorong',
      'Kab. Sorong Selatan',
      'Kab. Tambrauw',
      'Kab. Teluk Bintuni',
      'Kab. Teluk Wondama',
      'Kota. Sorong'
    ]],
    [25, 'Riau', [
      'Kab. Bengkalis',
      'Kab. Indagiri Hilir',
      'Kab. Indagiri Hulu',
      'Kab. Kampar',
      'Kab. Kepulauan Meranti',
      'Kab. Kuantan Singingi',
      'Kab. Pelalawan',
      'Kab. Rokan Hilir',
      'Kab. Rokan Hulu',
      'Kab. Siak',
      'Kota. Dumai',
      'Kota. Pekanbaru'
    ]],
    [26, 'Sulawesi Barat', [
      'Kab. Majene',
      'Kab. Mamasa',
      'Kab. Mamuju',
      'Kab. Mamuju Tengah',
      'Kab. Pasangkayu',
      'Kab. Polewali Mandar'
    ]],
    [27, 'Sulawesi Selatan', [
      'Kab. Bantaeng',
      'Kab. Barru',
      'Kab. Bone',
      'Kab. Bulukumba',
      'Kab. Enrekang',
      'Kab. Gowa',
      'Kab. Jeneponto',
      'Kab. Kepulauan Selayar',
      'Kab. Luwu',
      'Kab. Luwu Timur',
      'Kab. Luwu Utara',
      'Kab. Maros',
      'Kab. Pangkajene dan Kepulauan',
      'Kab. Pinrang',
      'Kab. Sidenreng Rappang',
      'Kab. Sinjau',
      'Kab. Soppeng',
      'Kab. Takalr',
      'Kab. Tana Toraja',
      'Kab. Toraja Utara',
      'Kab. Wajo',
      'Kota. Makassar',
      'Kota. Palopo',
      'Kota. Parepare'
    ]],
    [28, 'Sulawesi Tengah', [
      'Kab. Banggai',
      'Kab. Banggai Kepulauan',
      'Kab. Banggai Laut',
      'Kab. Buol',
      'Kab. Donggala',
      'Kab. Morowali',
      'Kab. Morowali Utara',
      'Kab. Parigi Moutong',
      'Kab. Poso',
      'Kab. Sigi',
      'Kab. Tojo Una-una',
      'Kab. Tolitoli',
      'Kota. Palu'
    ]],
    [29, 'Sulawesi Tenggara', [
      'Kab. Bombana',
      'Kab. Buton',
      'Kab. Buton Selatan',
      'Kab. Buton Tengah',
      'Kab. Buton Utara',
      'Kab. Kolaka',
      'Kab. Kolaka Timur',
      'Kab. Kolaka Utara',
      'Kab. Konawe',
      'Kab. Konawe Kepulauan',
      'Kab. Konawe Selatan',
      'Kab. Konawe Utara',
      'Kab. Muna',
      'Kab. Muna Barat',
      'Kab. Wakatobi',
      'Kota. Bau-bau',
      'Kota. Kendari'
    ]],
    [30, 'Sulawesi Utara', [
      'Kab. Bolaang Mongondow',
      'Kab. Bolaang Mongondow Selatan',
      'Kab. Bolaang Mongondow Timur',
      'Kab. Bolaang Mongondow Utara',
      'Kab. Kepulauan Sangihe',
      'Kab. Kepulauan Siau',
      'Kab. Kepulauan Talaud',
      'Kab. Minahasa',
      'Kab. Minahasa Selatan',
      'Kab. Minahasa Tenggara',
      'Kab. Minahasa Utara',
      'Kota. Bitung',
      'Kota. Kotamobagu',
      'Kota. Manado',
      'Kota. Tomohon'
    ]],
    [31, 'Sumatra Barat', [
      'Kab. Agam',
      'Kab. Dharmasraya',
      'Kab. Kepulauan Mentawai',
      'Kab. Lima Puluh Kota',
      'Kab. Padang Pariaman',
      'Kab. Pasaman',
      'Kab. Pasaman Barat',
      'Kab. Pesisir Selatan',
      'Kab. Sijunjung',
      'Kab. Solok',
      'kab. Solok Selatan',
      'Kab. Tanah Datar',
      'Kota. Bukit Tinggi',
      'Kota. Padang',
      'Kota. Padang Panjang',
      'Kota Pariaman',
      'Kota Payakumbuh',
      'Kota Sawahlunto',
      'Kota Solok'
    ]],
    [32, 'Sumatra Selatan', [
      'Kab. Banyuasin',
      'Kab. Empat Lawang',
      'Kab. Lahat',
      'Kab. Muara Enim',
      'Kab. Musi Banyuasin',
      'Kab. Musi Rawas',
      'Kab. Musi Rawas Utara',
      'Kab. Ogan Ilir',
      'Kab. Ogan Komering Ilir',
      'Kab. Ogan Komering Ulu',
      'Kab. Ogan Komering Ulu Selatan',
      'Kab. Ogan Komering Ulu Timur',
      'Kab. Penukal Abab Lematang Ilir',
      'Kota. Lubuklinggau',
      'Kota. Pagar Alam',
      'Kota. Palembang',
      'Kota. Prabumulih'
    ]],
    [33, 'Sumatra Utara', [
      'Kab. Asahan',
      'Kab. Batu Bara',
      'Kab. Dairi',
      'Kab. Deli Serdang',
      'Kab. Humbang Hasundutan',
      'Kab. Karo',
      'Kab. Labuhanbatu',
      'Kab. Labuhanbatu Selatan',
      'Kab. Labuhanbatu Utara',
      'Kab. Langkat',
      'Kab. Mandailing Natal',
      'Kab. Nias',
      'Kab. Nias Barat',
      'Kab. Nias Selatan',
      'Kab. Nias Utara',
      'Kab. Padang Lawas',
      'Kab. Padang Lawas Utara',
      'Kab. Pakpak Bharat',
      'Kab. Samosir',
      'Kab. Serdang Bedagai',
      'Kab. Simalungun',
      'Kab. Tapanuli Selatan',
      'Kab. Tapanuli Tengah',
      'Kab. Tapanuli Utara',
      'Kab. Toba Samosir',
      'Kota. Binjai',
      'Kota. Gunungsitoli',
      'Kota. Medan',
      'Kota. Padangsidempuan',
      'Kota. Pematangsiantar',
      'Kota. Sibolga',
      'Kota. Tanjungbalai',
      'Kota. Tebing Tinggi'
    ]]
  ]

  const rangeYears = [
    2020,
    1970
  ]

  const listMonths = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Oktober',
    'Desember'
  ]

  const creditCharacterCriterias = {
    age: [
      [1, 'kurang dari atau 25 tahun'],
      [2, '26 sampai 35 tahun'],
      [3, '36 sampai 45 tahun'],
      [4, 'lebih dari atau 46 tahun']
    ],
    education: [
      [1, 'SD'],
      [2, 'SMP'],
      [3, 'SMA'],
      [4, 'S1'],
      [5, 'S2']
    ],
    marriage: [
      [0, 'belum menikah'],
      [1, 'sudah menikah']
    ],
    dependent: [
      [4, '0 orang'],
      [3, '1 orang'],
      [2, '2 sampai 3 orang'],
      [1, '4 sampai 5 orang'],
      [0, 'lebih dari 5 orang']
    ],
    creditCard: [
      [0, 'tidak ada'],
      [1, '1 sampai 2'],
      [2, '3 sampai 5'],
      [4, 'lebih dari 5']
    ],
    onlineShopping: [
      [0, 'tidak pernah'],
      [1, '1 sampai 2'],
      [2, '3 sampai 5'],
      [3, '6 sampai 10'],
      [4, 'lebih dari 10']
    ],
    onlineShopping1th: [
      [0, 'tidak pernah'],
      [1, '1 sampai 2'],
      [2, '3 sampai 5'],
      [3, '6 sampai 10'],
      [4, 'lebih dari 10']
    ],
    insurance: [
      [0, 'tidak ada'],
      [1, 'memiliki asuransi']
    ],
    investment: [
      [0, 'tidak ada'],
      [1, 'obligasi'],
      [2, 'reksadana'],
      [3, 'saham'],
      [4, 'lainnya']
    ]
  }

  const b = d.body
  b.onload = function () {
    // state
    const state = {
      section: 'personal-field',
      // personal-field
      name: '',
      gender: 'Laki-laki',
      email: '',
      phone: '',
      province: 'Aceh',
      domicile: '',
      dobYear: rangeYears[0] + '',
      dobMonth: listMonths[0],
      dobDate: 1 + '',
      companyName: '',
      companyProvince: 'Aceh',
      companyDomicile: '',
      companyEmail: '',
      companyPhone: '',
      // credit-character-field
      age: 1,
      education: 1,
      marriage: 0,
      dependent: 4,
      creditCard: 0,
      onlineShopping: 0,
      onlineShopping1th: 0,
      insurance: 0,
      investment: 0
    }

    const prevBtn = b.querySelector('#prev-btn')
    const nextBtn = b.querySelector('#next-btn')
    const personalFieldSection = b.querySelector('#personal-field')
    const creditCharacterFieldSection = b.querySelector('#credit-character-field')
    const creditScoreSection = b.querySelector('#credit-score')
    const creditScoreSectionValue = b.querySelector('#credit-score-value')

    // Personal Field
    const personalField = function () {
      // get element
      const name = b.querySelector('#name')
      const gender = b.querySelector('#gender')
      const email = b.querySelector('#email')
      const phone = b.querySelector('#phone')
      const province = b.querySelector('#province')
      const domicile = b.querySelector('#domicile')
      const dobYear = b.querySelector('#dob-year')
      const dobMonth = b.querySelector('#dob-month')
      const dobDate = b.querySelector('#dob-date')
      const companyName = b.querySelector('#company-name')
      const companyProvince = b.querySelector('#company-province')
      const companyDomicile = b.querySelector('#company-domicile')
      const companyEmail = b.querySelector('#company-email')
      const companyPhone = b.querySelector('#company-phone')

      // render province
      const renderProvince = function () {
        let options = ''
        listProvinces.forEach((province) => {
          options = options + '<option value=\'' + province[0] + '\'>' + province[1] + '</option>'
        })
        province.innerHTML = options
        companyProvince.innerHTML = options
      }
      renderProvince()

      // render years of DoB
      const renderYearDoB = function () {
        let options = ''
        const listYears = []
        for (let i = rangeYears[0]; i >= rangeYears[1]; i--) listYears.push(i)
        listYears.forEach((year) => {
          options = options + '<option value=\'' + year + '\'>' + year + '</option>'
        })
        dobYear.innerHTML = options
      }
      renderYearDoB()

      // render month of DoB
      const renderMonthDoB = function () {
        let options = ''
        listMonths.forEach((month) => {
          options = options + '<option value=\'' + month + '\'>' + month + '</option>'
        })
        dobMonth.innerHTML = options
      }
      renderMonthDoB()

      // render date of DoB
      const renderDateDoB = function (year, month) {
        let endDate = 0

        if (month === 'Februari') {
          endDate = year % 4 ? 28 : 29
        } else {
          endDate = month === 'Januari' || month === 'Maret' || month === 'Mei' || month === 'Juli' || month === 'Agustus' || month === 'Oktober' || month === 'Desember'
            ? 31
            : 30
        }

        let options = ''
        for (let i = 1; i <= endDate; i++) {
          options = options + '<option value=\'' + i + '\'>' + i + '</option>'
        }

        dobDate.innerHTML = options
      }
      renderDateDoB(state.dobYear, state.dobMonth)

      // did Update
      const didUpdate = function () {
        //
        if (
          state.name &&
          state.gender &&
          state.email &&
          state.phone &&
          state.province &&
          state.domicile &&
          state.dobYear &&
          state.dobMonth &&
          state.dobDate &&
          state.companyName &&
          state.companyProvince &&
          state.companyDomicile &&
          state.companyEmail &&
          state.companyPhone
        ) {
          nextBtn.classList.remove('disabled')
        } else {
          nextBtn.classList.add('disabled')
        }
      }

      // handle change name
      name.onkeyup = function (e) {
        const value = e.target.value
        state.name = value
        didUpdate()
      }

      // handle change gender
      gender.onchange = function (e) {
        const value = e.target.value
        state.gender = value
        didUpdate()
      }

      // handle change email
      email.onkeyup = function (e) {
        const value = e.target.value
        state.email = value
        didUpdate()
      }

      // handle change phone
      phone.onkeyup = function (e) {
        const value = e.target.value
        state.phone = value
        didUpdate()
      }

      // handle change province
      province.onchange = function (e) {
        const value = e.target.value
        const domiciles = listProvinces[value][2] || []
        let options = ''
        domiciles.forEach((domicile) => {
          options = options + '<option value=\'' + domicile + '\'>' + domicile + '</option>'
        })
        domicile.innerHTML = options
        state.province = listProvinces[value][1]
        state.domicile = listProvinces[value][2] ? listProvinces[value][2][0] : ''
        didUpdate()
      }

      // handle change domicile
      domicile.onchange = function (e) {
        const value = e.target.value
        state.domicile = value
        didUpdate()
      }

      // handle change year of DoB
      dobYear.onchange = function (e) {
        const value = e.target.value
        state.dobYear = value
        state.dobDate = 1
        renderDateDoB(value, state.dobMonth)
        didUpdate()
      }

      // handle change month of DoB
      dobMonth.onchange = function (e) {
        const value = e.target.value
        state.dobMonth = value
        state.dobDate = 1
        renderDateDoB(state.dobYear, value)
        didUpdate()
      }

      // handle change date of DoB
      dobDate.onchange = function (e) {
        const value = e.target.value
        state.dobDate = value
        didUpdate()
      }

      // handle change name
      companyName.onkeyup = function (e) {
        const value = e.target.value
        state.companyName = value
        didUpdate()
      }

      // handle change company province
      companyProvince.onchange = function (e) {
        const value = e.target.value
        const companyDomiciles = listProvinces[value][2] || []
        let options = ''
        companyDomiciles.forEach((domicile) => {
          options = options + '<option value=\'' + domicile + '\'>' + domicile + '</option>'
        })
        companyDomicile.innerHTML = options
        state.companyProvince = listProvinces[value][1]
        state.companyDomicile = listProvinces[value][2] ? listProvinces[value][2][0] : ''
        didUpdate()
      }

      // handle change company domicile
      companyDomicile.onchange = function (e) {
        const value = e.target.value
        state.companyDomicile = value
        didUpdate()
      }

      // handle change company email
      companyEmail.onkeyup = function (e) {
        const value = e.target.value
        state.companyEmail = value
        didUpdate()
      }

      // handle change company phone
      companyPhone.onkeyup = function (e) {
        const value = e.target.value
        state.companyPhone = value
        didUpdate()
      }
    }
    personalField()

    // Credit Character Field
    const creditCharacterField = function () {
      // get element
      const age = b.querySelector('#age')
      const education = b.querySelector('#education')
      const marriage = b.querySelector('#marriage')
      const dependent = b.querySelector('#dependent')
      const creditCard = b.querySelector('#credit-card')
      const onlineShopping = b.querySelector('#online-shopping')
      const onlineShopping1th = b.querySelector('#online-shopping-1th')
      const insurance = b.querySelector('#insurance')
      const investment = b.querySelector('#investment')

      // render age
      const renderAge = function () {
        let options = ''
        creditCharacterCriterias.age.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        age.innerHTML = options
      }
      renderAge()

      // render education
      const renderEducation = function () {
        let options = ''
        creditCharacterCriterias.education.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        education.innerHTML = options
      }
      renderEducation()

      // render marriage
      const renderMarriage = function () {
        let options = ''
        creditCharacterCriterias.marriage.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        marriage.innerHTML = options
      }
      renderMarriage()

      // render dependent
      const renderDependent = function () {
        let options = ''
        creditCharacterCriterias.dependent.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        dependent.innerHTML = options
      }
      renderDependent()

      // render creditCard
      const renderCreditCard = function () {
        let options = ''
        creditCharacterCriterias.creditCard.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        creditCard.innerHTML = options
      }
      renderCreditCard()

      // render onlineShopping
      const renderOnlineShoping = function () {
        let options = ''
        creditCharacterCriterias.onlineShopping.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        onlineShopping.innerHTML = options
      }
      renderOnlineShoping()

      // render onlineShopping1th
      const renderOnlineShoping1th = function () {
        let options = ''
        creditCharacterCriterias.onlineShopping1th.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        onlineShopping1th.innerHTML = options
      }
      renderOnlineShoping1th()

      // render insurance
      const renderInsurance = function () {
        let options = ''
        creditCharacterCriterias.insurance.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        insurance.innerHTML = options
      }
      renderInsurance()

      // render investment
      const renderInvestment = function () {
        let options = ''
        creditCharacterCriterias.investment.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        investment.innerHTML = options
      }
      renderInvestment()

      // did Update
      const didUpdate = function () {
        //
      }

      // handle change age
      age.onchange = function (e) {
        const value = e.target.value
        state.age = Number(value)
        didUpdate()
      }

      // handle change education
      education.onchange = function (e) {
        const value = e.target.value
        state.education = Number(value)
        didUpdate()
      }

      // handle change marriage
      marriage.onchange = function (e) {
        const value = e.target.value
        state.marriage = Number(value)
        didUpdate()
      }

      // handle change dependent
      dependent.onchange = function (e) {
        const value = e.target.value
        state.dependent = Number(value)
        didUpdate()
      }

      // handle change creditCard
      creditCard.onchange = function (e) {
        const value = e.target.value
        state.creditCard = Number(value)
        didUpdate()
      }

      // handle change onlineShopping
      onlineShopping.onchange = function (e) {
        const value = e.target.value
        state.onlineShopping = Number(value)
        didUpdate()
      }

      // handle change onlineShopping1th
      onlineShopping1th.onchange = function (e) {
        const value = e.target.value
        state.onlineShopping1th = Number(value)
        didUpdate()
      }

      // handle change insurance
      insurance.onchange = function (e) {
        const value = e.target.value
        state.insurance = Number(value)
        didUpdate()
      }

      // handle change investment
      investment.onchange = function (e) {
        const value = e.target.value
        state.investment = Number(value)
        didUpdate()
      }
    }
    creditCharacterField()

    // calculate score
    const calculateScore = function () {
      const character = 0 +
        state.age +
        state.education +
        state.marriage +
        state.dependent +
        state.creditCard +
        state.onlineShopping +
        state.onlineShopping1th +
        state.insurance +
        state.investment
      return character
    }

    const displayPersonalData = function () {
      const name = b.querySelector('#data-name')
      const gender = b.querySelector('#data-gender')
      const email = b.querySelector('#data-email')
      const phone = b.querySelector('#data-phone')
      const province = b.querySelector('#data-province')
      const domicile = b.querySelector('#data-domicile')
      const dob = b.querySelector('#data-dob')
      const companyName = b.querySelector('#data-company-name')
      const companyProvince = b.querySelector('#data-company-province')
      const companyDomicile = b.querySelector('#data-company-domicile')
      const companyEmail = b.querySelector('#data-company-email')
      const companyPhone = b.querySelector('#data-company-phone')

      name.innerHTML = state.name
      gender.innerHTML = state.gender
      email.innerHTML = state.email
      phone.innerHTML = state.phone
      province.innerHTML = state.province
      domicile.innerHTML = state.domicile
      dob.innerHTML = state.dobDate + ' ' + state.dobMonth + ' ' + state.dobYear
      companyName.innerHTML = state.companyName
      companyProvince.innerHTML = state.companyProvince
      companyDomicile.innerHTML = state.companyDomicile
      companyEmail.innerHTML = state.companyEmail
      companyPhone.innerHTML = state.companyPhone
    }

    nextBtn.onclick = function () {
      if (!nextBtn.classList.contains('disabled')) {
        if (state.section === 'personal-field') {
          personalFieldSection.classList.remove('show')
          creditCharacterFieldSection.classList.add('show')
          // nextBtn.classList.add('disabled')
          prevBtn.classList.remove('disabled')
          prevBtn.classList.remove('hidden')
          state.section = 'credit-character-field'
        } else if (state.section === 'credit-character-field') {
          creditCharacterFieldSection.classList.remove('show')
          creditScoreSection.classList.add('show')
          nextBtn.classList.add('disabled')
          nextBtn.classList.add('hidden')
          prevBtn.classList.remove('disabled')
          state.section = 'credit-score'
          creditScoreSectionValue.innerHTML = calculateScore()
          displayPersonalData()
        }
      }
    }

    prevBtn.onclick = function () {
      if (!prevBtn.classList.contains('disabled')) {
        if (state.section === 'credit-character-field') {
          creditCharacterFieldSection.classList.remove('show')
          personalFieldSection.classList.add('show')
          nextBtn.classList.remove('disabled')
          prevBtn.classList.add('disabled')
          prevBtn.classList.add('hidden')
          state.section = 'personal-field'
        } else if (state.section === 'credit-score') {
          creditScoreSection.classList.remove('show')
          creditCharacterFieldSection.classList.add('show')
          nextBtn.classList.remove('disabled')
          nextBtn.classList.remove('hidden')
          // prevBtn.classList.add('disabled')
          state.section = 'credit-character-field'
        }
      }
    }
    //
  }
})(document)
