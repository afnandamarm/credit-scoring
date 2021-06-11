(function (d) {
  'use strict'

  const listProvinces = [
    [0, 'Aceh',[
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

  const creditCapacityCriterias = {
    bidangUsaha: [
      [2, 'Agrikultur'],
      [4, 'Jasa'],
      [6, 'Manufaktur'],
      [8, 'Bahan pokok'],
      [10, 'Lain-lain']
    ],
    lamaUsaha: [
      [2, 'Kurang dari 1 tahun'],
      [4, '1-5 tahun'],
      [6, '6-10 tahun'],
      [8, 'Lebih dari 10 tahun']
    ],
    usahayangDimiliki: [
      [1, 'Tidak ada'],
      [2, '1 usaha'],
      [4, '2-3 usaha'],
      [6, '3-5 usaha'],
      [8, 'Lebih dari 5 usaha']
    ],
    totalPekerja: [
      [1, 'Tidak ada'],
      [2, 'Kurang dari 5 orang'],
      [4, '5-10 orang'],
      [6, '10-20 orang'],
      [8, 'Lebih dari 20 orang']
    ],
    persainganUsaha: [
      [2, 'Kurang dari 5 pesaing'],
      [4, '5-10 pesaing'],
      [6, '11-15 pesaing'],
      [8, 'Lebih dari 15 pesaing']
    ],
    omsetperBulan: [
      [0, 'Negatif'],
      [2, 'Kurang dari 10 juta'],
      [4, '10-20 juta'],
      [6, '20-30 juta'],
      [8, '50-100 juta'],
      [10, 'Lebih dari 100 juta']
    ],
    omsetperTahun: [
      [2, 'Kurang dari 10 juta'],
      [4, '10-30 juta'],
      [6, '31-50 juta'],
      [8, '50-75 juta'],
      [10, '76-100 juta'],
      [12, 'Lebih dari 100 juta']
    ],
    pengeluaranperBulan: [
      [2, 'Kurang dari 5 juta'],
      [4, '5-10 juta'],
      [6, '10-20 juta'],
      [8, '20-30 juta'],
      [10, '50-100 juta'],
      [12, 'Lebih dari 100 juta']
    ],
    pengeluaranperTahun: [
      [2, 'Kurang dari 10 juta'],
      [4, '10-30 juta'],
      [6, '31-50 juta'],
      [8, '51-75 juta'],
      [10, '76-100 juta'],
      [12, 'Lebih dari 100 juta']
    ],
    penghasilanperBulan: [
      [0, 'Negatif'],
      [2, 'Kurang dari 10 juta'],
      [4, '10-20 juta'],
      [6, '20-30 juta'],
      [8, '50-100 juta'],
      [10, 'Lebih dari 100 juta']
    ],
    totalPinjamanAktif: [
      [1, 'Tidak ada'],
      [2, 'Kurang dari 10 juta'],
      [4, '10-50 juta'],
      [6, '50-100 juta'],
      [8, 'Lebih dari 100 juta']
    ],
    terakhirPinjamanDisetujui: [
      [1, 'Tidak ada'],
      [2, 'Kurang dari 6 bulan'],
      [4, '6 bulan-2 tahun lalu'],
      [6, '2-5 tahun lalu'],
      [8, '5-10 tahun lalu'],
      [10, 'Lebih dari 10 tahun lalu']
    ],
    jumlahFasilitasPinjaman: [
      [1, 'Tidak ada'],
      [2, '1 fasilitas'],
      [4, '1-3 fasilitas'],
      [6, '3-5 fasilitas'],
      [8, '5-10 fasilitas'],
      [10, 'Lebih dari 10 fasilitas']
    ],
    totalPinjamanMenunggak: [
      [1, 'Tidak ada'],
      [2, '1-2 pinjaman'],
      [4, '3-5 pinjaman'],
      [6, '5-7 pinjaman'],
      [8, 'Lebih dari 7 pinjaman']
    ],
    waktuMaksimalMenunggak: [
      [1, 'Tidak pernah'],
      [2, 'Kurang dari 30 hari'],
      [4, '30-45 hari'],
      [6, '46-60 hari'],
      [8, '61-90 hari']
    ],
  }

  const creditCapitalCriterias = {
    kepemilikanTempatUsaha: [
      [2, 'Sewa'],
      [3, 'Milik Sendiri']
    ],
    kepemilikanAset: [
      [2, 'Kurang dari 10 juta'],
      [3, '10-15 juta'],
      [4, '16-25 juta'],
      [5, '26-50 juta'],
      [6, '50-100 juta'],
      [7, 'Lebih dari 100 juta']
    ],
    modalUntukUsaha: [
      [2, 'Kurang dari 50 juta'],
      [3, '50-100 juta'],
      [4, '100-200 juta'],
      [5, 'Lebih dari 200 juta']
    ],
    kepemilikanModal: [
      [2, 'Hutang'],
      [3, 'Modal Sendiri']
    ],
    pembiayaanModalUsaha: [
      [2, 'Sewa'],
      [3, 'Milik Sendiri']
    ],
    jangkawaktuTabungan: [
      [2, 'Kurang dari 5 tahun'],
      [3, '6-9 tahun'],
      [4, '10-15 tahun'],
      [5, 'Lebih dari 15 tahun']
    ],
    depositoperBulan: [
      [2, 'Kurang dari 1 kali'],
      [3, '1-2 kali'],
      [4, '3-5 kali'],
      [5, 'Lebih dari 5 kali']
    ],
    penarikanperBulan: [
      [2, 'Kurang dari 1 kali'],
      [3, '1-2 kali'],
      [4, '3-5 kali'],
      [5, 'Lebih dari 5 kali']
    ],
    totalBalanceTabungan: [
      [0, 'Negatif'],
      [2, 'Kurang dari 10 juta'],
      [4, '10-20 juta'],
      [6, '20-30 juta'],
      [8, '50-100 juta'],
      [10, 'Lebih dari 100 juta']
    ],
    totalBalanceDeposito: [
      [2, 'Kurang dari 10 juta'],
      [3, '10-15 juta'],
      [4, '16-25 juta'],
      [5, '26-50 juta'],
      [6, '50-100 juta'],
      [7, 'Lebih dari 100 juta']
    ],
  }

  const creditConditionCriterias = {
    kondisiUsaha: [
      [2, 'Terdapat kendala'],
      [3, 'Tanpa kendala']
    ],
    kondisiOperasional6BulanTerakhir: [
      [2, 'Tidak lancar'],
      [3, 'Lancar']
    ],
    kondisiOperasional1TahunTerakhir: [
      [2, 'Tidak lancar'],
      [3, 'Lancar']
    ],
    kinerjaKeuangan6BulanTerakhir: [
      [2, 'Tidak lancar'],
      [3, 'Lancar']
    ],
    kinerjaKeuangan1TahunTerakhir: [
      [2, 'Tidak lancar'],
      [3, 'Lancar']
    ],
  }

  const creditCollateralCriterias = {
    asetJaminan: [
      [1, 'Tidak ada'],
      [2, 'Kendaraan'],
      [4, 'Mesin dan Peralatan'],
      [6, 'Bangunan'],
      [8, 'Tanah']
    ],
    kepemilikanTanah: [
      [1, 'Tidak memiliki'],
      [2, 'Sewa'],
      [4, 'Warisan'],
      [6, 'Milik pribadi']
    ],
    penggunaanTanah: [
      [1, 'Tidak ada'],
      [4, 'Lahan pertanian']
    ],
    lokasiTanah: [
      [1, 'Tidak memiliki'],
      [2, 'Lokasi tidak strategis'],
      [4, 'Lokasi strategis']
    ],
    totalPerolehanJaminanTanah: [
      [1, 'Tidak memiliki'],
      [2, 'Kurang dari 25 juta'],
      [4, '26-50 juta'],
      [6, '51-100 juta'],
      [2, '100-150 juta'],
      [2, 'Lebih dari 200 juta']
    ],
    kepemilikanBangunan: [
      [1, 'Tidak memiliki'],
      [2, 'Sewa'],
      [4, 'Warisan'],
      [6, 'Milik pribadi']
    ],
    usiaBangunan: [
      [1, 'Tidak memiliki'],
      [2, 'Lebih dari 15 tahun'],
      [4, '11-15 tahun'],
      [6, '7-10 tahun'],
      [8, '5-7 tahun'],
      [10, 'Kurang dari 5 tahun']
    ],
    penggunaanBangunan: [
      [1, 'Tidak ada'],
      [2, 'Rumah'],
      [4, 'Kantor'],
      [6, 'Toko'],
      [8, 'Lainnya']
    ],
    lokasiBangunan: [
      [1, 'Tidak memiliki'],
      [2, 'Lokasi tidak strategis'],
      [4, 'Lokasi strategis']
    ],
    totalPerolehanJaminanBangunan: [
      [1, 'Tidak memiliki'],
      [2, 'Kurang dari 25 juta'],
      [4, '26-50 juta'],
      [6, '51-100 juta'],
      [2, '100-150 juta'],
      [2, 'Lebih dari 200 juta']
    ],
    kepemilikanMesindanPeralatan: [
      [1, 'Tidak memiliki'],
      [2, 'Sewa'],
      [4, 'Warisan'],
      [6, 'Milik pribadi']
    ],
    usiaMesindanPeralatan: [
      [1, 'Tidak memiliki'],
      [2, 'Lebih dari 15 tahun'],
      [4, '11-15 tahun'],
      [6, '7-10 tahun'],
      [8, '5-7 tahun'],
      [10, 'Kurang dari 5 tahun']
    ],
    kondisiMesindanPeralatan: [
      [1, 'Tidak memiliki'],
      [2, 'Baru'],
      [4, 'Bermasalah'],
      [6, 'Rusak']
    ],
    penggunaanMesindanPeralatan: [
      [1, 'Tidak memiliki'],
      [2, 'Kegiatan operasional'],
      [4, 'Kegiatan distribusi']
    ],
    totalPerolehanJaminanMesindanPeralatan: [
      [1, 'Tidak memiliki'],
      [2, 'Kurang dari 25 juta'],
      [4, '26-50 juta'],
      [6, '51-100 juta'],
      [2, '100-150 juta'],
      [2, 'Lebih dari 200 juta']
    ],
    kepemilikanKendaraan: [
      [1, 'Tidak memiliki'],
      [2, 'Sewa'],
      [4, 'Warisan'],
      [6, 'Milik pribadi']
    ],
    usiaKendaraan: [
      [1, 'Tidak memiliki'],
      [2, 'Lebih dari 15 tahun'],
      [4, '11-15 tahun'],
      [6, '7-10 tahun'],
      [8, '5-7 tahun'],
      [10, 'Kurang dari 5 tahun']
    ],
    kondisiKendaraan: [
      [1, 'Tidak memiliki'],
      [2, 'Baru'],
      [4, 'Bermasalah'],
      [6, 'Rusak']
    ],
    jenisKendaraan: [
      [1, 'Tidak memiliki'],
      [2, 'Motor'],
      [4, 'Mobil'],
      [6, 'Pickup'],
      [8, 'Truk']
    ],
    totalPerolehanJaminanKendaraan: [
      [1, 'Tidak memiliki'],
      [2, 'Kurang dari 25 juta'],
      [4, '26-50 juta'],
      [6, '51-100 juta'],
      [2, '100-150 juta'],
      [2, 'Lebih dari 200 juta']
    ],
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
      investment: 0,
      // credit-capacity-field
      bidangUsaha: 2,
      lamaUsaha: 2,
      usahayangDimiliki: 1,
      totalPekerja: 1,
      persainganUsaha: 2,
      omsetperBulan: 2,
      omsetperTahun: 2,
      pengeluaranperBulan: 2,
      pengeluaranperTahun: 2,
      penghasilanperBulan: 2,
      totalPinjamanAktif: 1,
      terakhirPinjamanDisetujui: 1,
      totalPinjamanMenunggak: 1,
      waktuMaksimalMenunggak: 1,
      // credit-capital-field
      kepemilikanTempatUsaha: 2,
      kepemilikanAset: 2,
      modalUntukUsaha: 2,
      kepemilikanModal: 2,
      pembiayaanModalUsaha: 3,
      jangkawaktuTabungan: 2,
      depositoperBulan: 2,
      penarikanperBulan: 2,
      totalBalanceTabungan: 0,
      totalBalanceDeposito: 2,
      // credit-condition-field
      kondisiUsaha: 2,
      kondisiOperasional6BulanTerakhir: 2,
      kondisiOperasional1TahunTerakhir: 2,
      kinerjaKeuangan6BulanTerakhir: 2,
      kinerjaKeuangan1TahunTerakhir: 2,
      // credit-collateral-field
      asetJaminan: 1,
      kepemilikanTanah: 1,
      penggunaanTanah: 1,
      lokasiTanah: 1,
      totalPerolehanJaminanTanah: 1,
      kepemilikanBangunan: 1,
      usiaBangunan: 1,
      penggunaanBangunan: 1,
      lokasiBangunan: 1,
      totalPerolehanJaminanBangunan: 1,
      kepemilikanMesindanPeralatan: 1,
      usiaMesindanPeralatan: 1,
      kondisiMesindanPeralatan: 1,
      penggunaanMesindanPeralatan: 1,
      totalPerolehanJaminanMesindanPeralatan: 1,
      kepemilikanKendaraan: 1,
      usiaKendaraan: 1,
      kondisiKendaraan: 1,
      jenisKendaraan: 1,
      totalPerolehanJaminanKendaraan: 1,
    }

    const prevBtn = b.querySelector('#prev-btn')
    const nextBtn = b.querySelector('#next-btn')
    // section
    const personalFieldSection = b.querySelector('#personal-field')
    const creditCharacterFieldSection = b.querySelector('#credit-character-field')
    const creditCapacityFieldSection = b.querySelector('#credit-capacity-field')
    const creditCapitalFieldSection = b.querySelector('#credit-capital-field')
    const creditConditionFieldSection = b.querySelector('#credit-condition-field')
    const creditCollateralFieldSection = b.querySelector('#credit-collateral-field')
    const creditScoreSection = b.querySelector('#credit-score')
    //
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

    // Credit Capacity Field
    const creditCapacityField = function () {
      // get element
      const bidangUsaha = b.querySelector('#bidangUsaha')
      const lamaUsaha = b.querySelector('#lamaUsaha')
      const usahayangDimiliki = b.querySelector('#usahayangDimiliki')
      const totalPekerja = b.querySelector('#totalPekerja')
      const persainganUsaha = b.querySelector('#persainganUsaha')
      const omsetperBulan = b.querySelector('#omsetperBulan')
      const omsetperTahun = b.querySelector('#omsetperTahun')
      const pengeluaranperBulan = b.querySelector('#pengeluaranperBulan')
      const pengeluaranperTahun = b.querySelector('#pengeluaranperTahun')
      const penghasilanperBulan = b.querySelector('#penghasilanperBulan')
      const totalPinjamanAktif = b.querySelector('#totalPinjamanAktif')
      const jumlahFasilitasPinjaman = b.querySelector('#jumlahFasilitasPinjaman')
      const totalPinjamanMenunggak = b.querySelector('#totalPinjamanMenunggak')
      const waktuMaksimalMenunggak = b.querySelector('#waktuMaksimalMenunggak')

      // render Bidang Usaha
      const renderBidangUsaha = function () {
        let options = ''
        creditCapacityCriterias.bidangUsaha.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        bidangUsaha.innerHTML = options
      }
      renderBidangUsaha()

      // render Lama Usaha
      const renderLamaUsaha = function () {
        let options = ''
        creditCapacityCriterias.lamaUsaha.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        lamaUsaha.innerHTML = options
      }
      renderLamaUsaha()

      // render Usaha yang Dimiliki
      const renderUsahayangDimiliki = function () {
        let options = ''
        creditCapacityCriterias.usahayangDimiliki.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        usahayangDimiliki.innerHTML = options
      }
      renderUsahayangDimiliki()

      // render Total Pekerja
      const renderTotalPekerja = function () {
        let options = ''
        creditCapacityCriterias.totalPekerja.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        totalPekerja.innerHTML = options
      }
      renderTotalPekerja()

      // render Persaingan Usaha
      const renderpersainganUsaha = function () {
        let options = ''
        creditCapacityCriterias.persainganUsaha.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        persainganUsaha.innerHTML = options
      }
      renderpersainganUsaha()

      // render Omset per Bulan
      const renderomsetperBulan = function () {
        let options = ''
        creditCapacityCriterias.omsetperBulan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        omsetperBulan.innerHTML = options
      }
      renderomsetperBulan()

      // render Omset per Tahun
      const renderomsetperTahun = function () {
        let options = ''
        creditCapacityCriterias.omsetperTahun.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        omsetperTahun.innerHTML = options
      }
      renderomsetperTahun()

      // render Pengeluaran per Bulan
      const renderpengeluaranperBulan = function () {
        let options = ''
        creditCapacityCriterias.pengeluaranperBulan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        pengeluaranperBulan.innerHTML = options
      }
      renderpengeluaranperBulan()

      // render Pengeluaran per Tahun
      const renderpengeluaranperTahun = function () {
        let options = ''
        creditCapacityCriterias.pengeluaranperTahun.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        pengeluaranperTahun.innerHTML = options
      }
      renderpengeluaranperTahun()

      // render Penghasilan per Bulan
      const renderpenghasilanperBulan = function () {
        let options = ''
        creditCapacityCriterias.penghasilanperBulan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        penghasilanperBulan.innerHTML = options
      }
      renderpenghasilanperBulan()

      // render Total Pinjaman Aktif
      const rendertotalPinjamanAktif = function () {
        let options = ''
        creditCapacityCriterias.totalPinjamanAktif.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        totalPinjamanAktif.innerHTML = options
      }
      rendertotalPinjamanAktif()

      // render Terakhir Pinjaman Disetujui
      const renderterakhirPinjamanDisetujui = function () {
        let options = ''
        creditCapacityCriterias.terakhirPinjamanDisetujui.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        terakhirPinjamanDisetujui.innerHTML = options
      }
      renderterakhirPinjamanDisetujui()

      // render Jumlah Fasilitas Pinjaman
      const renderjumlahFasilitasPinjaman = function () {
        let options = ''
        creditCapacityCriterias.jumlahFasilitasPinjaman.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        jumlahFasilitasPinjaman.innerHTML = options
      }
      renderjumlahFasilitasPinjaman()

      // render Total Pinjaman Menunggak
      const rendertotalPinjamanMenunggak = function () {
        let options = ''
        creditCapacityCriterias.totalPinjamanMenunggak.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        totalPinjamanMenunggak.innerHTML = options
      }
      rendertotalPinjamanMenunggak()

      // render Waktu Maksimal Menunggak
      const renderwaktuMaksimalMenunggak= function () {
        let options = ''
        creditCapacityCriterias.waktuMaksimalMenunggak.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        waktuMaksimalMenunggak.innerHTML = options
      }
      renderwaktuMaksimalMenunggak()

      // did Update
      const didUpdate = function () {
        //
      }

      // handle change Bidang Usaha
      bidangUsaha.onchange = function (e) {
        const value = e.target.value
        state.bidangUsaha = Number(value)
        didUpdate()
      }

      // handle change Bidang Usaha
      lamaUsaha.onchange = function (e) {
        const value = e.target.value
        state.lamaUsaha = Number(value)
        didUpdate()
      }

      // handle change Usaha yang Dimiliki
      usahayangDimiliki.onchange = function (e) {
        const value = e.target.value
        state.usahayangDimiliki = Number(value)
        didUpdate()
      }

      // handle change Total Pekerja
      totalPekerja.onchange = function (e) {
        const value = e.target.value
        state.totalPekerja = Number(value)
        didUpdate()
      }

      // handle change Persaingan Usaha
      persainganUsaha.onchange = function (e) {
        const value = e.target.value
        state.persainganUsaha = Number(value)
        didUpdate()
      }

      // handle change Omset per Bulan
      omsetperBulan.onchange = function (e) {
        const value = e.target.value
        state.omsetperBulan = Number(value)
        didUpdate()
      }

      // handle change Omset per Tahun
      omsetperTahun.onchange = function (e) {
        const value = e.target.value
        state.omsetperTahun = Number(value)
        didUpdate()
      }

      // handle change Pengeluaran per Bulan
      pengeluaranperBulan.onchange = function (e) {
        const value = e.target.value
        state.pengeluaranperBulan = Number(value)
        didUpdate()
      }

      // handle change Pengeluaran per Tahun
      pengeluaranperTahun.onchange = function (e) {
        const value = e.target.value
        state.pengeluaranperTahun = Number(value)
        didUpdate()
      }

      // handle change Penghasilan per Bulan
      penghasilanperBulan.onchange = function (e) {
        const value = e.target.value
        state.penghasilanperBulan = Number(value)
        didUpdate()
      }

      // handle change Total Pinjaman Aktif
      totalPinjamanAktif.onchange = function (e) {
        const value = e.target.value
        state.totalPinjamanAktif = Number(value)
        didUpdate()
      }

      // handle change Terakhir Pinjaman Disetujui
      terakhirPinjamanDisetujui.onchange = function (e) {
        const value = e.target.value
        state.terakhirPinjamanDisetujui = Number(value)
        didUpdate()
      }

      // handle change Jumlah Fasilitas Pinjaman
      jumlahFasilitasPinjaman.onchange = function (e) {
        const value = e.target.value
        state.jumlahFasilitasPinjaman = Number(value)
        didUpdate()
      }

      // handle change Total Pinjaman Menunggak
      totalPinjamanMenunggak.onchange = function (e) {
        const value = e.target.value
        state.totalPinjamanMenunggak = Number(value)
        didUpdate()
      }

      // handle change Waktu Maksimal Menunggak
      waktuMaksimalMenunggak.onchange = function (e) {
        const value = e.target.value
        state.waktuMaksimalMenunggak = Number(value)
        didUpdate()
      }
    }
    creditCapacityField()

    // Credit Capital Field
    const creditCapitalField = function () {
      // get element
      const kepemilikanTempatUsaha = b.querySelector('#kepemilikanTempatUsaha')
      const kepemilikanAset = b.querySelector('#kepemilikanAset')
      const modalUntukUsaha = b.querySelector('#modalUntukUsaha')
      const kepemilikanModal = b.querySelector('#kepemilikanModal')
      const pembiayaanModalUsaha = b.querySelector('#pembiayaanModalUsaha')
      const jangkawaktuTabungan = b.querySelector('#jangkawaktuTabungan')
      const depositoperBulan = b.querySelector('#depositoperBulan')
      const penarikanperBulan = b.querySelector('#penarikanperBulan')
      const totalBalanceTabungan = b.querySelector('#totalBalanceTabungan')
      const totalBalanceDeposito = b.querySelector('#totalBalanceDeposito')

      // render Kepemilikan Tempat Usaha
      const renderkepemilikanTempatUsaha = function () {
        let options = ''
        creditCapitalCriterias.kepemilikanTempatUsaha.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kepemilikanTempatUsaha.innerHTML = options
      }
      renderkepemilikanTempatUsaha()

      // render Kepemilikan Aset
      const renderkepemilikanAset = function () {
        let options = ''
        creditCapitalCriterias.kepemilikanAset.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kepemilikanAset.innerHTML = options
      }
      renderkepemilikanAset()

      // render Modal Untuk Usaha
      const rendermodalUntukUsaha = function () {
        let options = ''
        creditCapitalCriterias.modalUntukUsaha.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        modalUntukUsaha.innerHTML = options
      }
      rendermodalUntukUsaha()

      // render Kepemilikan Modal
      const renderkepemilikanModal = function () {
        let options = ''
        creditCapitalCriterias.kepemilikanModal.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kepemilikanModal.innerHTML = options
      }
      renderkepemilikanModal()

      // render Pembiayaan Modal Usaha
      const renderpembiayaanModalUsaha = function () {
        let options = ''
        creditCapitalCriterias.pembiayaanModalUsaha.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        pembiayaanModalUsaha.innerHTML = options
      }
      renderpembiayaanModalUsaha()

      // render Jangka Waktu Tabungan
      const renderjangkawaktuTabungan = function () {
        let options = ''
        creditCapitalCriterias.jangkawaktuTabungan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        jangkawaktuTabungan.innerHTML = options
      }
      renderjangkawaktuTabungan()

      // render Deposito per Bulan
      const renderdepositoperBulan = function () {
        let options = ''
        creditCapitalCriterias.depositoperBulan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        depositoperBulan.innerHTML = options
      }
      renderdepositoperBulan()

      // render Penarikan per Bulan
      const renderpenarikanperBulan = function () {
        let options = ''
        creditCapitalCriterias.penarikanperBulan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        penarikanperBulan.innerHTML = options
      }
      renderpenarikanperBulan()

      // render Total Balance Tabungan
      const rendertotalBalanceTabungan = function () {
        let options = ''
        creditCapitalCriterias.totalBalanceTabungan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        totalBalanceTabungan.innerHTML = options
      }
      rendertotalBalanceTabungan()

      // render Total Balance Deposito
      const rendertotalBalanceDeposito = function () {
        let options = ''
        creditCapitalCriterias.totalBalanceDeposito.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        totalBalanceDeposito.innerHTML = options
      }
      rendertotalBalanceDeposito()

      // did Update
      const didUpdate = function () {
        //
      }

      // handle change Kepemilikan Tempat Usaha
      kepemilikanTempatUsaha.onchange = function (e) {
        const value = e.target.value
        state.kepemilikanTempatUsaha = Number(value)
        didUpdate()
      }

      // handle change Kepemilikan Aset
      kepemilikanAset.onchange = function (e) {
        const value = e.target.value
        state.kepemilikanAset = Number(value)
        didUpdate()
      }

      // handle change Modal Untuk Usaha
      modalUntukUsaha.onchange = function (e) {
        const value = e.target.value
        state.modalUntukUsaha = Number(value)
        didUpdate()
      }

      // handle change Kepemilikan Modal
      kepemilikanModal.onchange = function (e) {
        const value = e.target.value
        state.kepemilikanModal = Number(value)
        didUpdate()
      }

      // handle change Pembiayaan Modal Usaha
      pembiayaanModalUsaha.onchange = function (e) {
        const value = e.target.value
        state.pembiayaanModalUsaha = Number(value)
        didUpdate()
      }

      // handle change Jangka Waktu Tabungan
      jangkawaktuTabungan.onchange = function (e) {
        const value = e.target.value
        state.jangkawaktuTabungan = Number(value)
        didUpdate()
      }

      // handle change Deposito per Bulan
      depositoperBulan.onchange = function (e) {
        const value = e.target.value
        state.depositoperBulan = Number(value)
        didUpdate()
      }

      // handle change Penarikan per Bulan
      penarikanperBulan.onchange = function (e) {
        const value = e.target.value
        state.penarikanperBulan = Number(value)
        didUpdate()
      }

      // handle change Total Balance Tabungan
      totalBalanceTabungan.onchange = function (e) {
        const value = e.target.value
        state.totalBalanceTabungan = Number(value)
        didUpdate()
      }

      // handle change Total Balance Deposito
      totalBalanceDeposito.onchange = function (e) {
        const value = e.target.value
        state.totalBalanceDeposito = Number(value)
        didUpdate()
      }
    }
    creditCapitalField()

    // Credit Condition Field
    const creditConditionField = function () {
      // get element
      const kondisiUsaha = b.querySelector('#kondisiUsaha')
      const kondisiOperasional6BulanTerakhir = b.querySelector('#kondisiOperasional6BulanTerakhir')
      const kondisiOperasional1TahunTerakhir = b.querySelector('#kondisiOperasional1TahunTerakhir')
      const kinerjaKeuangan6BulanTerakhir = b.querySelector('#kinerjaKeuangan6BulanTerakhir')
      const kinerjaKeuangan1TahunTerakhir = b.querySelector('#kinerjaKeuangan1TahunTerakhir')

      // render Kondisi Usaha
      const renderkondisiUsaha = function () {
        let options = ''
        creditConditionCriterias.kondisiUsaha.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kondisiUsaha.innerHTML = options
      }
      renderkondisiUsaha()

      // render Kondisi Operasional 6 Bulan Terakhir
      const renderkondisiOperasional6BulanTerakhir = function () {
        let options = ''
        creditConditionCriterias.kondisiOperasional6BulanTerakhir.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kondisiOperasional6BulanTerakhir.innerHTML = options
      }
      renderkondisiOperasional6BulanTerakhir()

      // render Kondisi Operasional 1 Tahun Terakhir
      const renderkondisiOperasional1TahunTerakhir = function () {
        let options = ''
        creditConditionCriterias.kondisiOperasional1TahunTerakhir.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kondisiOperasional1TahunTerakhir.innerHTML = options
      }
      renderkondisiOperasional1TahunTerakhir()

      // render Kinerja Keuangan 6 Bulan Terakhir
      const renderkinerjaKeuangan6BulanTerakhir = function () {
        let options = ''
        creditConditionCriterias.kinerjaKeuangan6BulanTerakhir.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kinerjaKeuangan6BulanTerakhir.innerHTML = options
      }
      renderkinerjaKeuangan6BulanTerakhir()

      // render Kinerja Keuangan 1 Tahun Terakhir
      const renderkinerjaKeuangan1TahunTerakhir = function () {
        let options = ''
        creditConditionCriterias.kinerjaKeuangan1TahunTerakhir.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kinerjaKeuangan1TahunTerakhir.innerHTML = options
      }
      renderkinerjaKeuangan1TahunTerakhir()

      // did Update
      const didUpdate = function () {
        //
      }

      // handle change Kondisi Usaha
      kondisiUsaha.onchange = function (e) {
        const value = e.target.value
        state.kondisiUsaha = Number(value)
        didUpdate()
      }

      // handle change Kondisi Operasional 6 Bulan Terakhir
      kondisiOperasional6BulanTerakhir.onchange = function (e) {
        const value = e.target.value
        state.kondisiOperasional6BulanTerakhir = Number(value)
        didUpdate()
      }

      // handle change Kondisi Operasional 1 Tahun Terakhir
      kondisiOperasional1TahunTerakhir.onchange = function (e) {
        const value = e.target.value
        state.kondisiOperasional1TahunTerakhir = Number(value)
        didUpdate()
      }

      // handle change Kinerja Keuangan 6 Bulan Terakhir
      kinerjaKeuangan6BulanTerakhir.onchange = function (e) {
        const value = e.target.value
        state.kinerjaKeuangan6BulanTerakhir = Number(value)
        didUpdate()
      }

      // handle change Kinerja Keuangan 1 Tahun Terakhir
      kinerjaKeuangan1TahunTerakhir.onchange = function (e) {
        const value = e.target.value
        state.kinerjaKeuangan1TahunTerakhir = Number(value)
        didUpdate()
      }
    }
    creditConditionField()

    // Credit Collateral Field
    const creditCollateralField = function () {
      // get element
      const asetJaminan = b.querySelector('#asetJaminan')
      const kepemilikanTanah = b.querySelector('#kepemilikanTanah')
      const penggunaanTanah = b.querySelector('#penggunaanTanah')
      const lokasiTanah = b.querySelector('#lokasiTanah')
      const totalPerolehanJaminanTanah = b.querySelector('#totalPerolehanJaminanTanah')
      const kepemilikanBangunan = b.querySelector('#kepemilikanBangunan')
      const usiaBangunan = b.querySelector('#usiaBangunan')
      const penggunaanBangunan = b.querySelector('#penggunaanBangunan')
      const lokasiBangunan = b.querySelector('#lokasiBangunan')
      const totalPerolehanJaminanBangunan = b.querySelector('#totalPerolehanJaminanBangunan')
      const kepemilikanMesindanPeralatan = b.querySelector('#kepemilikanMesindanPeralatan')
      const usiaMesindanPeralatan = b.querySelector('#usiaMesindanPeralatan')
      const kondisiMesindanPeralatan = b.querySelector('#kondisiMesindanPeralatan')
      const penggunaanMesindanPeralatan = b.querySelector('#penggunaanMesindanPeralatan')
      const totalPerolehanJaminanMesindanPeralatan = b.querySelector('#totalPerolehanJaminanMesindanPeralatan')
      const kepemilikanKendaraan = b.querySelector('#kepemilikanKendaraan')
      const usiaKendaraan = b.querySelector('#usiaKendaraan')
      const kondisiKendaraan = b.querySelector('#kondisiKendaraan')
      const jenisKendaraan = b.querySelector('#jenisKendaraan')
      const totalPerolehanJaminanKendaraan = b.querySelector('#totalPerolehanJaminanKendaraan')

      // render Aset Jaminan
      const renderasetJaminan = function () {
        let options = ''
        creditCollateralCriterias.asetJaminan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        asetJaminan.innerHTML = options
      }
      renderasetJaminan()

      // render Kepemilikan Tanah
      const renderkepemilikanTanah = function () {
        let options = ''
        creditCollateralCriterias.kepemilikanTanah.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kepemilikanTanah.innerHTML = options
      }
      renderkepemilikanTanah()

      // render Penggunaan Tanah
      const renderpenggunaanTanah = function () {
        let options = ''
        creditCollateralCriterias.penggunaanTanah.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        penggunaanTanah.innerHTML = options
      }
      renderpenggunaanTanah()

      // render Lokasi Tanah
      const renderlokasiTanah = function () {
        let options = ''
        creditCollateralCriterias.lokasiTanah.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        lokasiTanah.innerHTML = options
      }
      renderlokasiTanah()

      // render Total Perolehan Jaminan Tanah
      const rendertotalPerolehanJaminanTanah = function () {
        let options = ''
        creditCollateralCriterias.totalPerolehanJaminanTanah.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        totalPerolehanJaminanTanah.innerHTML = options
      }
      rendertotalPerolehanJaminanTanah()

      // render Kepemilikan Bangunan
      const renderkepemilikanBangunan = function () {
        let options = ''
        creditCollateralCriterias.kepemilikanBangunan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kepemilikanBangunan.innerHTML = options
      }
      renderkepemilikanBangunan()

      // render Usia Bangunan
      const renderusiaBangunan = function () {
        let options = ''
        creditCollateralCriterias.usiaBangunan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        usiaBangunan.innerHTML = options
      }
      renderusiaBangunan()

      // render Penggunaan Bangunan
      const renderpenggunaanBangunan = function () {
        let options = ''
        creditCollateralCriterias.penggunaanBangunan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        penggunaanBangunan.innerHTML = options
      }
      renderpenggunaanBangunan()

      // render Lokasi Bangunan
      const renderlokasiBangunan = function () {
        let options = ''
        creditCollateralCriterias.lokasiBangunan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        lokasiBangunan.innerHTML = options
      }
      renderlokasiBangunan()

      // render Total Perolehan Jaminan Bangunan
      const rendertotalPerolehanJaminanBangunan = function () {
        let options = ''
        creditCollateralCriterias.totalPerolehanJaminanBangunan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        totalPerolehanJaminanBangunan.innerHTML = options
      }
      rendertotalPerolehanJaminanBangunan()

      // render Kepemilikan Mesin dan Peralatan
      const renderkepemilikanMesindanPeralatan = function () {
        let options = ''
        creditCollateralCriterias.kepemilikanMesindanPeralatan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kepemilikanMesindanPeralatan.innerHTML = options
      }
      renderkepemilikanMesindanPeralatan()

      // render Usia Mesin dan Peralatan
      const renderusiaMesindanPeralatan = function () {
        let options = ''
        creditCollateralCriterias.usiaMesindanPeralatan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        usiaMesindanPeralatan.innerHTML = options
      }
      renderusiaMesindanPeralatan()

      // render Kondisi Mesin dan Peralatan
      const renderkondisiMesindanPeralatan = function () {
        let options = ''
        creditCollateralCriterias.kondisiMesindanPeralatan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kondisiMesindanPeralatan.innerHTML = options
      }
      renderkondisiMesindanPeralatan()

      // render Penggunaan Mesin dan Peralatan
      const renderpenggunaanMesindanPeralatan = function () {
        let options = ''
        creditCollateralCriterias.penggunaanMesindanPeralatan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        penggunaanMesindanPeralatan.innerHTML = options
      }
      renderpenggunaanMesindanPeralatan()

      // render Total Perolehan Jaminan Mesin dan Peralatan
      const rendertotalPerolehanJaminanMesindanPeralatan = function () {
        let options = ''
        creditCollateralCriterias.totalPerolehanJaminanMesindanPeralatan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        totalPerolehanJaminanMesindanPeralatan.innerHTML = options
      }
      rendertotalPerolehanJaminanMesindanPeralatan()

      // render Kepemilikan Kendaraam
      const renderkepemilikanKendaraan = function () {
        let options = ''
        creditCollateralCriterias.kepemilikanKendaraan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kepemilikanKendaraan.innerHTML = options
      }
      renderkepemilikanKendaraan()

      // render Usia Kendaraan
      const renderusiaKendaraan = function () {
        let options = ''
        creditCollateralCriterias.usiaKendaraan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        usiaKendaraan.innerHTML = options
      }
      renderusiaKendaraan()

      // render Kondisi Kendaraan
      const renderkondisiKendaraan = function () {
        let options = ''
        creditCollateralCriterias.kondisiKendaraan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        kondisiKendaraan.innerHTML = options
      }
      renderkondisiKendaraan()

      // render Jenis Kendaraan
      const renderjenisKendaraan = function () {
        let options = ''
        creditCollateralCriterias.jenisKendaraan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        jenisKendaraan.innerHTML = options
      }
      renderjenisKendaraan()

      // render Total Perolehan Jaminan Kendaraan
      const rendertotalPerolehanJaminanKendaraan = function () {
        let options = ''
        creditCollateralCriterias.totalPerolehanJaminanKendaraan.forEach((option) => {
          options = options + '<option value=\'' + option[0] + '\'>' + option[1] + '</option>'
        })
        totalPerolehanJaminanKendaraan.innerHTML = options
      }
      rendertotalPerolehanJaminanKendaraan()

      // did Update
      const didUpdate = function () {
        //
      }

      // handle change Aset Jaminan
      asetJaminan.onchange = function (e) {
        const value = e.target.value
        state.asetJaminan = Number(value)
        didUpdate()
      }

      // handle change Kepemilikan Tanah
      kepemilikanTanah.onchange = function (e) {
        const value = e.target.value
        state.kepemilikanTanah = Number(value)
        didUpdate()
      }

      // handle change Penggunaan Tanah
      penggunaanTanah.onchange = function (e) {
        const value = e.target.value
        state.penggunaanTanah = Number(value)
        didUpdate()
      }

      // handle change Lokasi Tanah
      lokasiTanah.onchange = function (e) {
        const value = e.target.value
        state.lokasiTanah = Number(value)
        didUpdate()
      }

      // handle change Total Perolehan Jaminan Tanah
      totalPerolehanJaminanTanah.onchange = function (e) {
        const value = e.target.value
        state.totalPerolehanJaminanTanah = Number(value)
        didUpdate()
      }

      // handle change Kepemilikan Bangunan
      kepemilikanBangunan.onchange = function (e) {
        const value = e.target.value
        state.kepemilikanBangunan = Number(value)
        didUpdate()
      }

      // handle change Usia Bangunan
      usiaBangunan.onchange = function (e) {
        const value = e.target.value
        state.usiaBangunan = Number(value)
        didUpdate()
      }

      // handle change Penggunaan Bangunan
      penggunaanBangunan.onchange = function (e) {
        const value = e.target.value
        state.penggunaanBangunan = Number(value)
        didUpdate()
      }

      // handle change Lokasi Bangunan
      lokasiBangunan.onchange = function (e) {
        const value = e.target.value
        state.lokasiBangunan = Number(value)
        didUpdate()
      }

      // handle change Total Perolehan Jaminan Bangunan
      totalPerolehanJaminanBangunan.onchange = function (e) {
        const value = e.target.value
        state.totalPerolehanJaminanBangunan = Number(value)
        didUpdate()
      }

      // handle change Kepemilikan Mesin dan Peralatan
      kepemilikanMesindanPeralatan.onchange = function (e) {
        const value = e.target.value
        state.kepemilikanMesindanPeralatan = Number(value)
        didUpdate()
      }

      // handle change Usia Mesin dan Peralatan
      usiaMesindanPeralatan.onchange = function (e) {
        const value = e.target.value
        state.usiaMesindanPeralatan = Number(value)
        didUpdate()
      }

      // handle change Kondisi Mesin dan Peralatan
      kondisiMesindanPeralatan.onchange = function (e) {
        const value = e.target.value
        state.kondisiMesindanPeralatan = Number(value)
        didUpdate()
      }

      // handle change Penggunaan Mesin dan Peralatan
      penggunaanMesindanPeralatan.onchange = function (e) {
        const value = e.target.value
        state.penggunaanMesindanPeralatan = Number(value)
        didUpdate()
      }

      // handle change Total Perolehan Jaminan Mesin dan Peralatan
      totalPerolehanJaminanMesindanPeralatan.onchange = function (e) {
        const value = e.target.value
        state.totalPerolehanJaminanMesindanPeralatan = Number(value)
        didUpdate()
      }

      // handle change Kepemilikan Kendaraan
      kepemilikanKendaraan.onchange = function (e) {
        const value = e.target.value
        state.kepemilikanKendaraan = Number(value)
        didUpdate()
      }

      // handle change Usia Kendaraan
      usiaKendaraan.onchange = function (e) {
        const value = e.target.value
        state.usiaKendaraan = Number(value)
        didUpdate()
      }

      // handle change Kondisi Kendaraan
      kondisiKendaraan.onchange = function (e) {
        const value = e.target.value
        state.kondisiKendaraan = Number(value)
        didUpdate()
      }

      // handle change Jenis Kendaraan
      jenisKendaraan.onchange = function (e) {
        const value = e.target.value
        state.jenisKendaraan = Number(value)
        didUpdate()
      }

      // handle change Total Perolehan Jaminan Kendaraan
      totalPerolehanJaminanKendaraan.onchange = function (e) {
        const value = e.target.value
        state.totalPerolehanJaminanKendaraan = Number(value)
        didUpdate()
      }
    }
    creditCollateralField()

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
        state.investment +
        state.bidangUsaha +
        state.lamaUsaha +
        state.usahayangDimiliki +
        state.totalPekerja +
        state.persainganUsaha +
        state.omsetperBulan +
        state.omsetperTahun +
        state.pengeluaranperBulan +
        state.pengeluaranperTahun +
        state.penghasilanperBulan +
        state.totalPinjamanAktif +
        state.terakhirPinjamanDisetujui +
        state.jumlahFasilitasPinjaman +
        state.totalPinjamanMenunggak +
        state.waktuMaksimalMenunggak +
        state.kepemilikanTempatUsaha +
        state.kepemilikanAset +
        state.modalUntukUsaha +
        state.kepemilikanModal +
        state.pembiayaanModalUsaha +
        state.jangkawaktuTabungan +
        state.depositoperBulan +
        state.penarikanperBulan +
        state.totalBalanceTabungan +
        state.totalBalanceDeposito +
        state.kondisiUsaha +
        state.kondisiOperasional6BulanTerakhir +
        state.kondisiOperasional1TahunTerakhir +
        state.kinerjaKeuangan6BulanTerakhir +
        state.kinerjaKeuangan1TahunTerakhir +
        state.asetJaminan +
        state.kepemilikanTanah +
        state.penggunaanTanah +
        state.lokasiTanah +
        state.totalPerolehanJaminanTanah +
        state.kepemilikanBangunan +
        state.usiaBangunan +
        state.penggunaanBangunan +
        state.lokasiBangunan +
        state.totalPerolehanJaminanBangunan +
        state.kepemilikanMesindanPeralatan +
        state.usiaMesindanPeralatan +
        state.kondisiMesindanPeralatan +
        state.penggunaanMesindanPeralatan +
        state.totalPerolehanJaminanMesindanPeralatan +
        state.kepemilikanKendaraan +
        state.usiaKendaraan +
        state.kondisiKendaraan +
        state.jenisKendaraan +
        state.totalPerolehanJaminanKendaraan
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
      if (!nextBtn.classList.contains('show')) {
        if (state.section === 'personal-field') {
          personalFieldSection.classList.remove('show')
          creditCharacterFieldSection.classList.add('show')
          // nextBtn.classList.add('disabled')
          prevBtn.classList.remove('disabled')
          prevBtn.classList.remove('hidden')
          state.section = 'credit-character-field'
        } else if (state.section === 'credit-character-field') {
          creditCharacterFieldSection.classList.remove('show')
          creditCapacityFieldSection.classList.add('show')
          state.section = 'credit-capacity-field'
        } else if (state.section === 'credit-capacity-field') {
          creditCapacityFieldSection.classList.remove('show')
          creditCapitalFieldSection.classList.add('show')
          state.section = 'credit-capital-field'
        } else if (state.section === 'credit-capital-field') {
          creditCapitalFieldSection.classList.remove('show')
          creditConditionFieldSection.classList.add('show')
          state.section = 'credit-condition-field'
        } else if (state.section === 'credit-condition-field') {
          creditConditionFieldSection.classList.remove('show')
          creditCollateralFieldSection.classList.add('show')
          state.section = 'credit-collateral-field'
        } else if (state.section === 'credit-collateral-field') {
          creditCollateralFieldSection.classList.remove('show')
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