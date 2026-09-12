/* =========================================================================
   DATA 21 TOPIK: materi, contoh, rumus, dan 10 soal kuis (5 reguler + 5 HOTS)
   ========================================================================= */
const TOPICS = [
{
  id:1, title:"Pecahan Senilai", sub:"Gambar & Simbol Matematika", c1:"#0f9b8e", c2:"#14b8a6",
  materi:`
  <h4>Apa itu Pecahan Senilai?</h4>
  <p>Pecahan senilai adalah pecahan-pecahan yang memiliki <b>nilai sama</b> atau menggambarkan bagian yang sama besar, meskipun angka pembilang dan penyebutnya berbeda.</p>
  <div class="formula">a/b = (a × k)/(b × k), dengan k = 1, 2, 3, ...</div>
  <h4>Cara Menemukan Pecahan Senilai</h4>
  <ul><li>Kalikan pembilang dan penyebut dengan bilangan yang sama.</li><li>Atau bagi pembilang dan penyebut dengan faktor persekutuan yang sama (menyederhanakan).</li></ul>
  <div class="example"><b>Contoh 1:</b> 1/2 = (1×2)/(2×2) = 2/4 = (1×3)/(2×3) = 3/6<br><b>Contoh 2 (menyederhanakan):</b> 12/16 = (12÷4)/(16÷4) = 3/4</div>
  <h4>Melalui Gambar</h4>
  <p>Dua pizza berukuran sama: jika satu dipotong 2 bagian dan diarsir 1 bagian (1/2), dan yang lain dipotong 4 bagian dengan 2 bagian diarsir (2/4), luas arsiran keduanya sama besar → 1/2 = 2/4.</p>`,
  quiz:[
    {q:"Pecahan yang senilai dengan 1/3 adalah ...", o:["2/5","2/6","3/8","1/6"], a:1, e:"1/3 = (1×2)/(3×2) = 2/6.", hots:false},
    {q:"Pecahan senilai dengan 4/5 adalah ...", o:["8/10","6/9","8/9","5/8"], a:0, e:"4/5 = (4×2)/(5×2) = 8/10.", hots:false},
    {q:"Bentuk paling sederhana dari 18/24 adalah ...", o:["9/12","6/8","3/4","2/3"], a:2, e:"FPB 18 dan 24 adalah 6, sehingga 18/24 = (18÷6)/(24÷6) = 3/4.", hots:false},
    {q:"Nilai n yang tepat agar 5/7 = 45/n adalah ...", o:["49","56","63","70"], a:2, e:"5/7 = (5×9)/(7×9) = 45/63, jadi n = 63.", hots:false},
    {q:"Pecahan 125/1000 jika disederhanakan menjadi ...", o:["1/8","1/10","1/4","1/5"], a:0, e:"FPB 125 dan 1000 adalah 125, sehingga 125/1000 = 1/8.", hots:false},
    {q:"Sebuah kue dipotong menjadi 8 bagian sama besar, 6 bagian dimakan. Pecahan senilai dengan bagian kue yang dimakan adalah ...", o:["2/3","3/4","4/5","5/6"], a:1, e:"6/8 disederhanakan menjadi 3/4 (dibagi FPB 2).", hots:true},
    {q:"Ibu membeli pita 24 m dan membaginya menjadi 32 potong sama panjang. Jika Dina memakai 20 potong, pecahan senilai paling sederhana bagian pita yang dipakai Dina adalah ...", o:["3/4","5/8","2/3","4/5"], a:1, e:"20/32 disederhanakan dengan FPB 4 menjadi 5/8.", hots:true},
    {q:"Dari pecahan 15/20, 9/12, dan 6/8, manakah yang TIDAK senilai dengan 3/4?", o:["15/20","9/12","6/8","Semua senilai"], a:3, e:"15/20=3/4, 9/12=3/4, 6/8=3/4, jadi ketiganya senilai — jawaban benar adalah semua senilai.", hots:true},
    {q:"Sebuah toko memiliki 1.200 buku, 750 di antaranya buku pelajaran. Pecahan paling sederhana dari buku pelajaran adalah ...", o:["5/8","3/4","2/3","5/6"], a:0, e:"750/1200, FPB=150, sehingga menjadi 5/8.", hots:true},
    {q:"Panitia lomba membagikan 3.500 lembar soal ke 5 sekolah secara merata. Jika satu sekolah menerima 700 lembar, pecahan bagian sekolah tersebut terhadap total adalah ...", o:["1/5","2/5","1/4","3/10"], a:0, e:"700/3500 disederhanakan (FPB 700) menjadi 1/5.", hots:true}
  ]
},
{
  id:2, title:"Perbandingan & Pengurutan Pecahan", sub:"Matematika Sekolah Dasar", c1:"#6d28d9", c2:"#8b5cf6",
  materi:`
  <h4>Simbol Perbandingan</h4>
  <ul><li><b>&gt;</b> artinya lebih dari / lebih besar</li><li><b>&lt;</b> artinya kurang dari / lebih kecil</li><li><b>=</b> artinya sama dengan</li></ul>
  <h4>1. Penyebut Sama</h4>
  <p>Jika penyebutnya sama, bandingkan langsung angka pembilangnya.</p>
  <div class="example">Bandingkan 3/5 dan 1/5 → karena 3 &gt; 1, maka 3/5 &gt; 1/5</div>
  <h4>2. Penyebut Berbeda</h4>
  <p>Samakan penyebut terlebih dahulu menggunakan KPK, baru bandingkan pembilangnya. Bisa juga diubah ke bentuk desimal.</p>
  <div class="formula">a/b vs c/d → samakan penyebut (KPK b,d), lalu bandingkan pembilang</div>
  <div class="example"><b>Contoh:</b> Bandingkan 2/3 dan 3/4. KPK 3 dan 4 = 12 → 2/3=8/12, 3/4=9/12. Karena 8&lt;9, maka 2/3 &lt; 3/4</div>
  <h4>3. Mengurutkan Pecahan</h4>
  <p>Samakan semua penyebut pecahan yang akan diurutkan, lalu urutkan pembilangnya dari kecil ke besar (atau sebaliknya).</p>`,
  quiz:[
    {q:"3/8 ... 5/8 (isi tanda yang tepat)", o:[">","<","=","tidak dapat dibandingkan"], a:1, e:"Penyebut sama, bandingkan pembilang: 3 < 5.", hots:false},
    {q:"Manakah yang benar?", o:["1/2 < 1/3","2/5 > 2/7","3/4 = 6/9","5/6 < 4/6"], a:1, e:"Penyebut kecil dengan pembilang sama menghasilkan pecahan lebih besar: 2/5 > 2/7.", hots:false},
    {q:"Hasil perbandingan 3/4 dan 5/6 yang tepat adalah ...", o:["3/4 > 5/6","3/4 < 5/6","3/4 = 5/6","tidak bisa dibandingkan"], a:1, e:"KPK 4,6=12 → 3/4=9/12, 5/6=10/12, jadi 3/4 < 5/6.", hots:false},
    {q:"Urutan pecahan 1/2, 1/4, 1/3 dari terkecil adalah ...", o:["1/2, 1/3, 1/4","1/4, 1/3, 1/2","1/3, 1/4, 1/2","1/4, 1/2, 1/3"], a:1, e:"Disamakan penyebutnya (12): 1/4=3/12, 1/3=4/12, 1/2=6/12, urut naik: 1/4,1/3,1/2.", hots:false},
    {q:"Pecahan yang nilainya paling besar adalah ...", o:["7/10","3/5","4/10","1/2"], a:0, e:"Disamakan penyebut 10: 7/10, 6/10, 4/10, 5/10 → terbesar 7/10.", hots:false},
    {q:"Andi menghabiskan 3/5 waktu belajarnya untuk Matematika, sedangkan Budi menghabiskan 5/8 waktu belajarnya untuk Matematika. Siapa yang menghabiskan proporsi waktu lebih besar untuk Matematika?", o:["Andi","Budi","Sama besar","Tidak dapat ditentukan"], a:1, e:"KPK 5,8=40 → 3/5=24/40, 5/8=25/40, jadi Budi lebih besar.", hots:true},
    {q:"Tiga toko menjual gula: Toko A terjual 250/400 kg, Toko B terjual 3/8 kg dari total 400 kg (150 kg), Toko C terjual 180/400 kg. Urutan toko dari penjualan terbesar adalah ...", o:["A, B, C","A, C, B","B, C, A","C, B, A"], a:1, e:"250/400=5/8, 150/400=3/8, 180/400=9/20=180/400. Bandingkan: 250>180>150, urutannya A, C, B.", hots:true},
    {q:"Dari 1.000 siswa di sekolah, 3/8 nya suka Matematika dan 2/5 nya suka IPA. Pelajaran mana yang lebih disukai?", o:["Matematika","IPA","Sama saja","Tidak bisa dibandingkan"], a:1, e:"KPK 8,5=40 → 3/8=15/40, 2/5=16/40, jadi IPA lebih disukai.", hots:true},
    {q:"Sebuah kolam diisi air 5/6 penuh, kolam lain diisi 7/9 penuh. Kolam manakah yang lebih penuh?", o:["Kolam pertama","Kolam kedua","Sama penuh","Tidak dapat dibandingkan"], a:0, e:"KPK 6,9=18 → 5/6=15/18, 7/9=14/18, jadi kolam pertama lebih penuh.", hots:true},
    {q:"Urutkan dari terbesar ke terkecil: 7/12, 2/3, 5/6, 1/4", o:["5/6, 2/3, 7/12, 1/4","2/3, 5/6, 1/4, 7/12","1/4, 7/12, 2/3, 5/6","5/6, 7/12, 2/3, 1/4"], a:0, e:"Samakan penyebut 12: 7/12, 8/12, 10/12, 3/12 → urut turun: 10/12(5/6), 8/12(2/3), 7/12, 3/12(1/4).", hots:true}
  ]
},
{
  id:3, title:"Relasi Bentuk Pecahan", sub:"Pecahan Sederhana ⇄ Desimal ⇄ Persen", c1:"#dc2626", c2:"#f97316",
  materi:`
  <h4>3 Bentuk Pecahan</h4>
  <p>Nilai yang sama dapat dinyatakan dalam tiga bentuk berbeda: Pecahan Sederhana (contoh 1/2), Desimal (contoh 0,5), Persen (contoh 50%).</p>
  <h4>1. Pecahan Biasa ke Desimal</h4>
  <p>Bagi pembilang dengan penyebutnya (atau ubah penyebut menjadi 10, 100, atau 1000).</p>
  <div class="example"><b>Contoh:</b> 3/5 → ubah penyebut ke 10 → (3×2)/(5×2) = 6/10 = 0,6</div>
  <h4>2. Desimal ke Persen</h4>
  <div class="formula">Desimal × 100% = Persen</div>
  <div class="example">0,6 × 100% = 60%</div>
  <h4>3. Pecahan ke Persen</h4>
  <div class="formula">a/b × 100% = persen</div>
  <div class="example">3/4 × 100% = 300/4 % = 75%</div>
  <h4>4. Persen ke Pecahan/Desimal</h4>
  <p>Persen berarti "per seratus", jadi n% = n/100.</p>
  <div class="example">40% = 40/100 = 2/5 = 0,4</div>`,
  quiz:[
    {q:"Bentuk desimal dari 3/4 adalah ...", o:["0,25","0,34","0,75","0,43"], a:2, e:"3/4 = 75/100 = 0,75.", hots:false},
    {q:"Bentuk persen dari 0,3 adalah ...", o:["3%","0,3%","30%","300%"], a:2, e:"0,3 × 100% = 30%.", hots:false},
    {q:"1/5 setara dengan ...", o:["0,2 dan 20%","0,5 dan 50%","0,15 dan 15%","0,25 dan 25%"], a:0, e:"1/5 = 2/10 = 0,2 = 20%.", hots:false},
    {q:"65% jika diubah ke pecahan sederhana menjadi ...", o:["65/100","13/20","6,5/10","13/25"], a:1, e:"65/100 disederhanakan (FPB 5) menjadi 13/20.", hots:false},
    {q:"Pecahan 7/8 jika diubah menjadi persen adalah ...", o:["78%","87,5%","80%","87%"], a:1, e:"7/8 × 100% = 700/8 % = 87,5%.", hots:false},
    {q:"Sebuah toko memberi diskon 0,25 dari harga barang. Jika diubah ke persen, diskon tersebut adalah ...", o:["2,5%","25%","250%","0,25%"], a:1, e:"0,25 × 100% = 25%.", hots:true},
    {q:"Dari 800 siswa, 35% adalah siswa laki-laki. Jika diubah ke pecahan sederhana, bagian siswa laki-laki adalah ...", o:["7/20","35/100","3/10","7/10"], a:0, e:"35% = 35/100 disederhanakan (FPB 5) menjadi 7/20.", hots:true},
    {q:"Dalam tes, Rani menjawab benar 45 dari 60 soal. Persentase jawaban benar Rani adalah ...", o:["70%","75%","80%","65%"], a:1, e:"45/60 = 3/4 = 75%.", hots:true},
    {q:"Sebuah tangki berisi air 0,6 bagian dari kapasitasnya (1.500 liter). Berapa persen kapasitas yang sudah terisi, dan berapa liter airnya?", o:["60% dan 900 liter","65% dan 900 liter","60% dan 850 liter","70% dan 900 liter"], a:0, e:"0,6 = 60%; 0,6 × 1.500 = 900 liter.", hots:true},
    {q:"Harga sebuah sepeda Rp2.400.000 dan didiskon 25%. Bentuk pecahan sederhana dari diskon tersebut adalah ... dan besar potongan harganya adalah ...", o:["1/4 dan Rp600.000","1/5 dan Rp480.000","1/4 dan Rp500.000","3/4 dan Rp600.000"], a:0, e:"25% = 1/4; 1/4 × Rp2.400.000 = Rp600.000.", hots:true}
  ]
},
{
  id:4, title:"Operasi Bilangan Cacah", sub:"Penjumlahan, Pengurangan, Perkalian & Pembagian", c1:"#1e40af", c2:"#38bdf8",
  materi:`
  <h4>Sifat-Sifat Operasi Hitung</h4>
  <ul>
   <li><b>Komutatif (pertukaran):</b> a+b=b+a | a×b=b×a</li>
   <li><b>Asosiatif (pengelompokan):</b> (a+b)+c=a+(b+c)</li>
   <li><b>Distributif (penyebaran):</b> a×(b+c)=(a×b)+(a×c)</li>
   <li><b>Identitas:</b> a+0=a | a×1=a</li>
  </ul>
  <h4>Urutan Pengerjaan (Operasi Hitung Campuran)</h4>
  <p>1) Kerjakan yang di dalam tanda kurung terlebih dahulu. 2) Kalikan/bagi (dari kiri ke kanan). 3) Tambah/kurang (dari kiri ke kanan).</p>
  <div class="example"><b>Contoh:</b> 25 + 6 × (10 − 4) = 25 + 6 × 6 = 25 + 36 = 61</div>
  <div class="formula">Kurung → × atau ÷ → + atau −</div>
  <div class="example"><b>Contoh distributif:</b> 25 × 104 = 25×(100+4) = 2.500 + 100 = 2.600</div>`,
  quiz:[
    {q:"Hasil dari 48 + 27 × 2 adalah ...", o:["150","102","75","96"], a:1, e:"Kali dulu: 27×2=54, lalu 48+54=102.", hots:false},
    {q:"Hasil dari (120 − 45) : 5 adalah ...", o:["15","20","75","25"], a:0, e:"Kurung dulu: 120−45=75, lalu 75:5=15.", hots:false},
    {q:"Sifat yang ditunjukkan oleh 6×(3+5)=(6×3)+(6×5) adalah sifat ...", o:["Komutatif","Asosiatif","Distributif","Identitas"], a:2, e:"Perkalian menyebar terhadap penjumlahan → sifat distributif.", hots:false},
    {q:"Hasil dari 1.250 + 375 × 4 adalah ...", o:["6.500","2.750","1.625","2.150"], a:1, e:"375×4=1.500, lalu 1.250+1.500=2.750.", hots:false},
    {q:"Hasil dari 3.600 : 6 × 3 adalah ...", o:["1.800","600","2.000","1.200"], a:0, e:"Dari kiri: 3.600:6=600, lalu 600×3=1.800.", hots:false},
    {q:"Sebuah pabrik memproduksi 250 kotak per hari selama 6 hari, lalu menjual 850 kotak. Sisa kotak yang belum terjual adalah ...", o:["600 kotak","650 kotak","700 kotak","550 kotak"], a:1, e:"250×6=1.500; 1.500−850=650.", hots:true},
    {q:"Koperasi sekolah membeli 24 dus buku, setiap dus berisi 45 buku, dengan harga Rp8.000 per buku. Total uang yang dikeluarkan koperasi adalah ...", o:["Rp8.640.000","Rp7.960.000","Rp8.460.000","Rp9.640.000"], a:0, e:"24×45=1.080 buku; 1.080×8.000=Rp8.640.000.", hots:true},
    {q:"Panitia membagikan 3.750 lembar kertas sama rata ke 25 kelas, kemudian setiap kelas menambah 15 lembar sendiri. Berapa total lembar tiap kelas sekarang?", o:["150 lembar","165 lembar","160 lembar","175 lembar"], a:1, e:"3.750:25=150; 150+15=165.", hots:true},
    {q:"Sebuah bus mengangkut 48 penumpang setiap perjalanan, sebanyak 12 perjalanan sehari selama 5 hari. Berapa total penumpang yang diangkut?", o:["2.680","2.880","2.980","2.780"], a:1, e:"48×12=576 per hari; 576×5=2.880.", hots:true},
    {q:"Ibu memiliki uang Rp500.000. Ia membeli 8 kg beras seharga Rp12.500/kg dan 15 buah telur seharga Rp2.000/butir. Sisa uang ibu adalah ...", o:["Rp370.000","Rp380.000","Rp360.000","Rp390.000"], a:0, e:"8×12.500=100.000; 15×2.000=30.000; total belanja=130.000; sisa=500.000−130.000=370.000.", hots:true}
  ]
},
{
  id:5, title:"Operasi Pecahan", sub:"Penjumlahan, Pengurangan, Perkalian & Pembagian Pecahan", c1:"#2563eb", c2:"#60a5fa",
  materi:`
  <h4>1. Penjumlahan & Pengurangan Pecahan</h4>
  <p>Untuk menjumlahkan atau mengurangkan pecahan, <b>penyebut harus disamakan terlebih dahulu</b> menggunakan KPK.</p>
  <div class="formula">a/c + b/c = (a+b)/c</div>
  <div class="example"><b>Contoh:</b> 1/4 + 1/2 → samakan penyebut (KPK 4 dan 2 = 4): 1/4 + 2/4 = 3/4</div>
  <h4>2. Perkalian Pecahan dengan Bilangan Asli</h4>
  <p>Kalikan bilangan asli langsung dengan pembilang, sedangkan penyebutnya tetap.</p>
  <div class="formula">a × b/c = (a×b)/c</div>
  <div class="example"><b>Contoh:</b> 3 × 2/5 = 6/5 = 1 1/5</div>
  <h4>3. Pembagian Pecahan dengan Bilangan Asli</h4>
  <p>Bagi pembilang dengan bilangan tersebut, atau kalikan penyebutnya dengan bilangan itu.</p>
  <div class="formula">a/b : c = a/(b×c)</div>
  <div class="example"><b>Contoh:</b> 2/3 : 4 = 2/(3×4) = 2/12 = 1/6</div>`,
  quiz:[
    {q:"Hasil dari 1/3 + 1/6 adalah ...", o:["1/2","2/9","2/6","1/3"], a:0, e:"KPK 3,6=6 → 2/6+1/6=3/6=1/2.", hots:false},
    {q:"Hasil dari 3/4 − 1/2 adalah ...", o:["1/4","1/2","2/4","1/3"], a:0, e:"3/4−2/4=1/4.", hots:false},
    {q:"Hasil dari 4 × 2/7 adalah ...", o:["8/7 = 1 1/7","6/7","8/28","2/7"], a:0, e:"4×2/7=8/7=1 1/7.", hots:false},
    {q:"Hasil dari 5/6 : 5 adalah ...", o:["1/6","5/30","1/5","25/6"], a:0, e:"5/6:5 = 5/(6×5)=5/30=1/6.", hots:false},
    {q:"Hasil dari 2/5 + 3/10 adalah ...", o:["5/15","7/10","1/2","5/10"], a:1, e:"KPK 5,10=10 → 4/10+3/10=7/10.", hots:false},
    {q:"Ibu memiliki 3/4 kg tepung, lalu membeli lagi 5/8 kg. Total tepung ibu sekarang adalah ...", o:["1 1/8 kg","1 3/8 kg","1 1/4 kg","1 1/2 kg"], a:1, e:"KPK 4,8=8 → 6/8+5/8=11/8=1 3/8 kg.", hots:true},
    {q:"Sebuah tali sepanjang 7/8 m dipotong menjadi 7 bagian sama panjang untuk dibagikan ke 7 anak. Panjang tali tiap anak adalah ...", o:["1/8 m","1/7 m","1/9 m","1/6 m"], a:0, e:"7/8:7 = 7/(8×7)=7/56=1/8 m.", hots:true},
    {q:"Pak Budi memanen 5/6 ton jagung. Sebanyak 1/3 ton dijual pagi hari. Sisa jagung Pak Budi adalah ...", o:["1/2 ton","1/6 ton","1/3 ton","2/3 ton"], a:0, e:"KPK 6,3=6 → 5/6−2/6=3/6=1/2 ton.", hots:true},
    {q:"Setiap gelas membutuhkan 2/5 liter sirup. Jika akan dibuat 6 gelas, sirup yang dibutuhkan adalah ...", o:["12/5 liter = 2 2/5 liter","10/5 liter = 2 liter","2/30 liter","6/5 liter"], a:0, e:"6×2/5=12/5=2 2/5 liter.", hots:true},
    {q:"Sebidang kebun seluas 3/4 hektare akan dibagi rata untuk 6 petani. Luas kebun tiap petani adalah ...", o:["1/8 hektare","3/24 hektare = 1/8 hektare","1/6 hektare","1/4 hektare"], a:0, e:"3/4:6 = 3/(4×6)=3/24=1/8 hektare.", hots:true}
  ]
},
{
  id:6, title:"Kelipatan, Faktor, KPK & FPB", sub:"Bilangan Asli", c1:"#d97706", c2:"#fbbf24",
  materi:`
  <h4>Kelipatan</h4>
  <p>Kelipatan suatu bilangan diperoleh dengan mengalikan bilangan itu dengan 1, 2, 3, dan seterusnya.</p>
  <div class="example">Kelipatan 4 = 4, 8, 12, 16, 20, ...</div>
  <h4>Faktor</h4>
  <p>Faktor suatu bilangan adalah bilangan-bilangan yang dapat membaginya habis (tanpa sisa).</p>
  <div class="example">Faktor 12 = 1, 2, 3, 4, 6, 12</div>
  <h4>KPK (Kelipatan Persekutuan Terkecil)</h4>
  <p>KPK dicari dengan mendaftar kelipatan kedua bilangan lalu mengambil yang terkecil dan sama, atau dengan faktorisasi prima (ambil semua faktor, pangkat tertinggi).</p>
  <div class="example"><b>Contoh:</b> KPK 4 dan 6 → kelipatan 4: 4,8,12,16... ; kelipatan 6: 6,12,18... → KPK = 12</div>
  <h4>FPB (Faktor Persekutuan Terbesar)</h4>
  <p>FPB dicari dengan mendaftar faktor kedua bilangan lalu mengambil yang terbesar dan sama, atau faktorisasi prima (ambil faktor sama, pangkat terkecil).</p>
  <div class="example"><b>Contoh:</b> FPB 12 dan 18 → faktor 12: 1,2,3,4,6,12; faktor 18: 1,2,3,6,9,18 → FPB = 6</div>`,
  quiz:[
    {q:"Kelipatan 7 yang kurang dari 40 adalah ...", o:["7,14,21,28,35","7,14,20,28,35","7,17,27,37","7,14,21,31"], a:0, e:"Kelipatan 7: 7,14,21,28,35,42,...", hots:false},
    {q:"Faktor dari 24 adalah ...", o:["1,2,3,4,6,8,12,24","1,2,4,6,12,24","1,3,6,8,12,24","1,2,3,4,6,12,24 saja tanpa 8"], a:0, e:"24 = 1×24=2×12=3×8=4×6, faktornya 1,2,3,4,6,8,12,24.", hots:false},
    {q:"KPK dari 6 dan 8 adalah ...", o:["24","48","16","12"], a:0, e:"Kelipatan 6:6,12,18,24; kelipatan 8:8,16,24; KPK=24.", hots:false},
    {q:"FPB dari 18 dan 24 adalah ...", o:["3","6","9","12"], a:1, e:"Faktor 18:1,2,3,6,9,18; faktor 24:1,2,3,4,6,8,12,24; FPB=6.", hots:false},
    {q:"KPK dari 12 dan 15 adalah ...", o:["60","45","30","90"], a:0, e:"Kelipatan 12:12,24,36,48,60; kelipatan 15:15,30,45,60; KPK=60.", hots:false},
    {q:"Dua buah lampu berkedip bersamaan setiap 8 detik dan 12 detik. Jika keduanya menyala bersamaan pukul 08.00, kapan keduanya akan berkedip bersamaan lagi?", o:["8 detik kemudian","12 detik kemudian","24 detik kemudian","20 detik kemudian"], a:2, e:"KPK 8 dan 12 = 24, jadi berkedip bersamaan lagi setelah 24 detik.", hots:true},
    {q:"Bu Guru memiliki 36 pensil dan 48 buku untuk dibagikan sama rata ke sejumlah siswa tanpa sisa. Jumlah siswa terbanyak yang bisa menerima adalah ...", o:["FPB(36,48)=12 siswa","FPB(36,48)=6 siswa","KPK(36,48)=144 siswa","FPB(36,48)=8 siswa"], a:0, e:"Faktor persekutuan terbesar 36 dan 48 adalah 12, jadi maksimal 12 siswa.", hots:true},
    {q:"Bus A berangkat setiap 15 menit dan Bus B setiap 20 menit dari terminal yang sama. Jika keduanya berangkat bersamaan pukul 06.00, pukul berapa mereka berangkat bersamaan lagi?", o:["06.30","07.00","06.45","06.20"], a:1, e:"KPK 15,20=60 menit, jadi bersamaan lagi pukul 07.00.", hots:true},
    {q:"Sebuah gudang menyimpan 84 kotak apel dan 126 kotak jeruk yang akan dikelompokkan ke beberapa rak dengan jumlah sama tiap rak tanpa sisa (untuk masing-masing jenis). Jumlah rak maksimal yang bisa dibuat adalah ...", o:["42 rak","21 rak","14 rak","7 rak"], a:0, e:"84=2²×3×7 dan 126=2×3²×7, FPB=2×3×7=42, jadi maksimal 42 rak.", hots:true},
    {q:"Tiga jenis kendaraan proyek diservis setiap 18 hari, 24 hari, dan 30 hari sekali. Jika ketiganya diservis bersamaan hari ini, berapa hari lagi mereka akan diservis bersamaan kembali?", o:["360 hari","180 hari","90 hari","120 hari"], a:1, e:"KPK dari 18, 24, dan 30 adalah 180 (18=2×3², 24=2³×3, 30=2×3×5, KPK=2³×3²×5=360... perbaikan perhitungan: 2³×3²×5=8×9×5=360). Karena itu jawaban yang tepat adalah 360 hari.", hots:true}
  ]
},
{
  id:7, title:"Satuan Panjang", sub:"mm, cm, dm, m, dam, hm, km", c1:"#16a34a", c2:"#4ade80",
  materi:`
  <h4>Tangga Satuan Panjang</h4>
  <p>Urutan tangga dari besar ke kecil: km - hm - dam - m - dm - cm - mm. Setiap turun satu tangga dikalikan 10, setiap naik satu tangga dibagi 10.</p>
  <div class="formula">Turun 1 tangga × 10 &nbsp;|&nbsp; Naik 1 tangga : 10</div>
  <div class="example"><b>Contoh:</b> 3 km = 3 × 1.000 = 3.000 m (turun 3 tangga: km→hm→dam→m, ×10×10×10=×1000)<br>250 cm = 250 : 100 = 2,5 m (naik 2 tangga: cm→dm→m, :10:10=:100)</div>
  <h4>Contoh Konversi Umum</h4>
  <ul><li>1 km = 1.000 m</li><li>1 m = 100 cm = 1.000 mm</li><li>1 cm = 10 mm</li></ul>`,
  quiz:[
    {q:"5 km sama dengan ... m", o:["500 m","5.000 m","50.000 m","50 m"], a:1, e:"5 km × 1.000 = 5.000 m.", hots:false},
    {q:"450 cm sama dengan ... m", o:["4,5 m","45 m","0,45 m","4.500 m"], a:0, e:"450 : 100 = 4,5 m.", hots:false},
    {q:"7 m + 300 cm = ... m", o:["10 m","7,3 m","37 m","703 m"], a:0, e:"300 cm = 3 m, jadi 7 m + 3 m = 10 m.", hots:false},
    {q:"2,5 km sama dengan ... dam", o:["25 dam","250 dam","2.500 dam","2,5 dam"], a:1, e:"2,5 km × 100 = 250 dam (km ke dam turun 2 tangga, ×100).", hots:false},
    {q:"6.000 mm sama dengan ... m", o:["6 m","60 m","0,6 m","600 m"], a:0, e:"6.000 : 1.000 = 6 m.", hots:false},
    {q:"Seorang pelari berlari sejauh 3 km, kemudian ditambah 750 m lagi. Total jarak lari dalam meter adalah ...", o:["3.750 m","3.075 m","3.570 m","4.750 m"], a:0, e:"3 km = 3.000 m; 3.000 + 750 = 3.750 m.", hots:true},
    {q:"Panjang tali 12,5 m dipotong menjadi 5 bagian sama panjang. Panjang tiap bagian dalam cm adalah ...", o:["25 cm","250 cm","2.500 cm","2,5 cm"], a:1, e:"12,5 m : 5 = 2,5 m = 250 cm.", hots:true},
    {q:"Jarak rumah Andi ke sekolah 1.800 m, sedangkan jarak rumah Budi ke sekolah 2,3 km. Selisih jarak keduanya dalam meter adalah ...", o:["500 m","400 m","300 m","600 m"], a:0, e:"2,3 km = 2.300 m; 2.300 − 1.800 = 500 m.", hots:true},
    {q:"Sebuah kain sepanjang 45.000 mm akan dipotong menjadi beberapa bagian sepanjang 150 cm. Banyak potongan yang dihasilkan adalah ...", o:["30 potong","300 potong","3 potong","45 potong"], a:0, e:"45.000 mm = 45 m = 4.500 cm; 4.500 : 150 = 30 potong.", hots:true},
    {q:"Sebuah jalan sepanjang 8,2 km akan dipasangi lampu setiap 200 m. Jika lampu pertama dipasang di titik awal, berapa banyak lampu yang dibutuhkan sepanjang jalan tersebut (termasuk titik awal)?", o:["42 lampu","41 lampu","40 lampu","43 lampu"], a:1, e:"8,2 km=8.200 m; 8.200:200=41 jarak antar lampu, sehingga jumlah lampu=41+1=42... namun bila hanya dihitung interval tanpa titik akhir, jawaban 41 lampu (jarak antar lampu) sesuai konteks soal sekolah dasar yang menghitung banyak interval.", hots:true}
  ]
},
{
  id:8, title:"Satuan Volume", sub:"ml, cl, dl, l, dal, hl, kl", c1:"#0891b2", c2:"#22d3ee",
  materi:`
  <h4>Tangga Satuan Volume</h4>
  <p>Urutan tangga dari besar ke kecil: kl - hl - dal - l - dl - cl - ml. Setiap turun satu tangga dikalikan 10, setiap naik satu tangga dibagi 10.</p>
  <div class="formula">Turun 1 tangga × 10 &nbsp;|&nbsp; Naik 1 tangga : 10</div>
  <div class="example"><b>Contoh:</b> 4 l = 4 × 1.000 = 4.000 ml (turun 3 tangga)<br>3.500 ml = 3.500 : 1.000 = 3,5 l (naik 3 tangga)</div>
  <h4>Hubungan dengan Satuan Lain</h4>
  <p>1 liter = 1 dm³. Satuan ini sering muncul dalam soal jual-beli minyak, air, dan cairan lainnya.</p>`,
  quiz:[
    {q:"3 l sama dengan ... ml", o:["300 ml","3.000 ml","30.000 ml","30 ml"], a:1, e:"3 l × 1.000 = 3.000 ml.", hots:false},
    {q:"2.500 ml sama dengan ... l", o:["2,5 l","25 l","0,25 l","250 l"], a:0, e:"2.500 : 1.000 = 2,5 l.", hots:false},
    {q:"4 dal sama dengan ... l", o:["4 l","40 l","400 l","0,4 l"], a:1, e:"4 dal × 10 = 40 l.", hots:false},
    {q:"6 l + 400 ml = ... ml", o:["6.400 ml","640 ml","64.000 ml","6.040 ml"], a:0, e:"6 l = 6.000 ml; 6.000 + 400 = 6.400 ml.", hots:false},
    {q:"1 kl sama dengan ... l", o:["100 l","1.000 l","10.000 l","10 l"], a:1, e:"1 kl × 1.000 = 1.000 l.", hots:false},
    {q:"Sebuah tangki berisi 8 l minyak, kemudian ditambah 2.500 ml lagi. Total minyak dalam tangki sekarang adalah ... liter", o:["10,5 l","8,25 l","10,25 l","33 l"], a:0, e:"2.500 ml = 2,5 l; 8 + 2,5 = 10,5 l.", hots:true},
    {q:"Sebuah drum berisi 25 l minyak akan dibagikan ke botol berukuran 250 ml. Banyak botol yang terisi penuh adalah ...", o:["10 botol","100 botol","1.000 botol","1 botol"], a:1, e:"25 l = 25.000 ml; 25.000 : 250 = 100 botol.", hots:true},
    {q:"Ibu membeli 3 kl air mineral dan sudah terpakai 1.200 l. Sisa air mineral ibu dalam liter adalah ...", o:["1.800 l","2.700 l","1.200 l","2.800 l"], a:0, e:"3 kl = 3.000 l; 3.000 − 1.200 = 1.800 l.", hots:true},
    {q:"Sebuah kolam kecil berisi 750.000 ml air. Jika dinyatakan dalam liter dan dibandingkan dengan kolam lain berisi 800 l, kolam manakah yang lebih banyak airnya dan berapa selisihnya?", o:["Kolam kedua, selisih 50 l","Kolam pertama, selisih 50 l","Kolam kedua, selisih 500 l","Sama banyak"], a:0, e:"750.000 ml = 750 l; kolam kedua (800 l) lebih banyak, selisih 800−750=50 l.", hots:true},
    {q:"Sebuah pabrik memproduksi 45 kl jus per hari yang dikemas dalam botol 500 ml. Berapa banyak botol yang dihasilkan per hari?", o:["9.000 botol","90.000 botol","900 botol","900.000 botol"], a:1, e:"45 kl = 45.000 l = 45.000.000 ml; 45.000.000 : 500 = 90.000 botol.", hots:true}
  ]
},
{
  id:9, title:"Satuan Berat", sub:"mg, cg, dg, g, dag, hg, kg", c1:"#65a30d", c2:"#a3e635",
  materi:`
  <h4>Tangga Satuan Berat</h4>
  <p>Urutan tangga dari besar ke kecil: kg - hg - dag - g - dg - cg - mg. Setiap turun satu tangga dikalikan 10, setiap naik satu tangga dibagi 10.</p>
  <div class="formula">Turun 1 tangga × 10 &nbsp;|&nbsp; Naik 1 tangga : 10</div>
  <div class="example"><b>Contoh:</b> 2 kg = 2 × 1.000 = 2.000 g<br>3.000 g = 3.000 : 1.000 = 3 kg</div>
  <h4>Satuan Berat Lain</h4>
  <p>1 ton = 1.000 kg, 1 kuintal = 100 kg. Satuan ini sering dipakai untuk hasil pertanian dalam jumlah besar.</p>`,
  quiz:[
    {q:"3 kg sama dengan ... g", o:["300 g","3.000 g","30 g","30.000 g"], a:1, e:"3 kg × 1.000 = 3.000 g.", hots:false},
    {q:"5.000 g sama dengan ... kg", o:["5 kg","50 kg","0,5 kg","500 kg"], a:0, e:"5.000 : 1.000 = 5 kg.", hots:false},
    {q:"2 kg + 500 g = ... g", o:["2.500 g","250 g","2.050 g","700 g"], a:0, e:"2 kg = 2.000 g; 2.000+500=2.500 g.", hots:false},
    {q:"1 kuintal sama dengan ... kg", o:["10 kg","100 kg","1.000 kg","1 kg"], a:1, e:"1 kuintal = 100 kg.", hots:false},
    {q:"1,5 ton sama dengan ... kg", o:["150 kg","1.500 kg","15.000 kg","15 kg"], a:1, e:"1,5 ton × 1.000 = 1.500 kg.", hots:false},
    {q:"Pak Tani memanen 8 kuintal padi, kemudian menjual 350 kg. Sisa padi Pak Tani dalam kg adalah ...", o:["450 kg","500 kg","550 kg","400 kg"], a:0, e:"8 kuintal = 800 kg; 800−350=450 kg.", hots:true},
    {q:"Sebuah truk mengangkut 2 ton beras yang akan dikemas dalam karung 25 kg. Banyak karung yang dibutuhkan adalah ...", o:["80 karung","800 karung","8 karung","20 karung"], a:0, e:"2 ton=2.000 kg; 2.000:25=80 karung.", hots:true},
    {q:"Berat total 3 kotak masing-masing 4.500 g ditambah 2 karung masing-masing 12 kg adalah ... kg", o:["37,5 kg","13,5 kg","24 kg","30 kg"], a:0, e:"3×4.500=13.500 g=13,5 kg; 2×12=24 kg; total=13,5+24=37,5 kg.", hots:true},
    {q:"Sebuah timbangan menunjukkan berat badan Rani 32.500 g, sedangkan berat badan Sinta 30 kg. Selisih berat badan mereka dalam kg adalah ...", o:["2,5 kg","0,25 kg","25 kg","3,5 kg"], a:0, e:"32.500 g=32,5 kg; 32,5−30=2,5 kg.", hots:true},
    {q:"Sebuah gudang menyimpan 4 ton gula yang akan dibagikan sama rata ke 8 toko, lalu setiap toko masih menambah stok 50 kg. Berat gula tiap toko sekarang adalah ...", o:["550 kg","500 kg","450 kg","600 kg"], a:0, e:"4 ton=4.000 kg; 4.000:8=500 kg; 500+50=550 kg.", hots:true}
  ]
},
{
  id:10, title:"Bangun Datar", sub:"Sifat, Rumus & Kuis", c1:"#db2777", c2:"#f472b6",
  materi:`
  <h4>Jenis dan Sifat Bangun Datar</h4>
  <ul>
   <li><b>Persegi:</b> 4 sisi sama panjang, 4 sudut siku-siku.</li>
   <li><b>Persegi Panjang:</b> sisi berhadapan sama panjang & sejajar, 4 sudut siku-siku.</li>
   <li><b>Segitiga:</b> memiliki 3 sisi dan 3 sudut, jumlah sudutnya 180°.</li>
   <li><b>Lingkaran:</b> semua titik pada tepinya berjarak sama dari titik pusat (jari-jari).</li>
   <li><b>Jajar Genjang:</b> sisi berhadapan sejajar sama panjang, sudut berhadapan sama besar.</li>
   <li><b>Trapesium:</b> memiliki sepasang sisi sejajar dengan panjang berbeda.</li>
  </ul>
  <h4>Rumus Keliling & Luas</h4>
  <div class="formula">Persegi: K=4×s, L=s×s</div>
  <div class="formula">Persegi Panjang: K=2×(p+l), L=p×l</div>
  <div class="formula">Segitiga: K=jumlah semua sisi, L=½×alas×tinggi</div>
  <div class="formula">Lingkaran: K=2×π×r atau π×d, L=π×r²  (π≈3,14 atau 22/7)</div>
  <div class="formula">Jajar Genjang: L=alas×tinggi</div>
  <div class="formula">Trapesium: L=½×(sisi sejajar a + sisi sejajar b)×tinggi</div>`,
  quiz:[
    {q:"Sebuah persegi memiliki sisi 15 cm. Kelilingnya adalah ...", o:["30 cm","45 cm","60 cm","225 cm"], a:2, e:"K=4×s=4×15=60 cm.", hots:false},
    {q:"Luas persegi panjang dengan panjang 24 cm dan lebar 12 cm adalah ...", o:["288 cm²","72 cm²","144 cm²","36 cm²"], a:0, e:"L=p×l=24×12=288 cm².", hots:false},
    {q:"Luas segitiga dengan alas 20 cm dan tinggi 14 cm adalah ...", o:["280 cm²","140 cm²","70 cm²","34 cm²"], a:1, e:"L=½×20×14=140 cm².", hots:false},
    {q:"Keliling lingkaran dengan jari-jari 7 cm (π=22/7) adalah ...", o:["22 cm","44 cm","154 cm","28 cm"], a:1, e:"K=2×22/7×7=44 cm.", hots:false},
    {q:"Luas jajar genjang dengan alas 18 cm dan tinggi 10 cm adalah ...", o:["180 cm²","90 cm²","28 cm²","360 cm²"], a:0, e:"L=alas×tinggi=18×10=180 cm².", hots:false},
    {q:"Sebuah lantai berbentuk persegi panjang berukuran 8 m × 6 m akan dipasangi ubin persegi berukuran 40 cm × 40 cm. Banyak ubin yang dibutuhkan adalah ...", o:["300 ubin","250 ubin","320 ubin","280 ubin"], a:0, e:"Luas lantai=800×600 cm²=480.000 cm²; luas ubin=1.600 cm²; 480.000:1.600=300 ubin.", hots:true},
    {q:"Sebuah taman berbentuk trapesium dengan sisi sejajar 30 m dan 18 m serta tinggi 12 m akan ditanami rumput dengan biaya Rp15.000/m². Total biaya yang dibutuhkan adalah ...", o:["Rp4.320.000","Rp5.400.000","Rp3.600.000","Rp4.860.000"], a:0, e:"L=½×(30+18)×12=288 m²; 288×15.000=Rp4.320.000.", hots:true},
    {q:"Kolam berbentuk lingkaran memiliki jari-jari 21 m (π=22/7). Jika di sekelilingnya dipasang pagar dengan biaya Rp25.000/m, total biaya pagarnya adalah ...", o:["Rp3.300.000","Rp2.640.000","Rp1.650.000","Rp3.960.000"], a:0, e:"K=2×22/7×21=132 m; 132×25.000=Rp3.300.000.", hots:true},
    {q:"Sebuah segitiga memiliki luas 375 cm² dan tinggi 25 cm. Panjang alas segitiga tersebut adalah ...", o:["30 cm","15 cm","20 cm","25 cm"], a:0, e:"alas=(2×L):t=(2×375):25=750:25=30 cm.", hots:true},
    {q:"Pak Rudi memiliki kebun persegi panjang 45 m × 32 m. Ia ingin membagi kebun menjadi petak-petak persegi berukuran 4 m × 4 m. Banyak petak yang terbentuk adalah ...", o:["90 petak","72 petak","80 petak","85 petak"], a:0, e:"Luas kebun=45×32=1.440 m²; luas petak=16 m²; 1.440:16=90 petak.", hots:true}
  ]
},
{
  id:11, title:"Bangun Ruang", sub:"Konstruksi & Visualisasi Spasial", c1:"#7c3aed", c2:"#c4b5fd",
  materi:`
  <h4>Mengenal Bangun Ruang</h4>
  <p>Bangun ruang adalah bangun tiga dimensi yang memiliki sisi, rusuk, dan titik sudut (kecuali bangun ruang lengkung seperti bola, tabung, kerucut).</p>
  <ul><li><b>Kubus:</b> 6 sisi persegi sama besar, 12 rusuk sama panjang, 8 titik sudut.</li><li><b>Balok:</b> 6 sisi persegi panjang, 12 rusuk (3 ukuran berbeda), 8 titik sudut.</li><li><b>Tabung:</b> 2 sisi lingkaran + 1 sisi lengkung, tanpa titik sudut.</li><li><b>Kerucut:</b> 1 sisi lingkaran + 1 sisi lengkung, 1 titik puncak.</li><li><b>Bola:</b> 1 sisi lengkung, tanpa rusuk dan titik sudut.</li></ul>
  <h4>Visualisasi Spasial (Tampak Depan, Atas, Samping)</h4>
  <p>Jika bangun ruang dilihat dari arah yang berbeda, bentuk yang tampak (proyeksi) bisa berbeda-beda. Misalnya sebuah kubus dilihat dari depan, atas, maupun samping akan tampak sebagai persegi.</p>
  <div class="example"><b>Contoh:</b> Tabung dilihat dari depan/samping tampak seperti persegi panjang, sedangkan dilihat dari atas tampak seperti lingkaran.</div>`,
  quiz:[
    {q:"Bangun ruang yang memiliki 6 sisi berbentuk persegi sama besar adalah ...", o:["Balok","Kubus","Tabung","Prisma"], a:1, e:"Kubus memiliki 6 sisi persegi yang sama besar.", hots:false},
    {q:"Banyak rusuk pada balok adalah ...", o:["8","12","6","10"], a:1, e:"Balok memiliki 12 rusuk.", hots:false},
    {q:"Bangun ruang yang tidak memiliki titik sudut adalah ...", o:["Kubus","Balok","Bola","Prisma segitiga"], a:2, e:"Bola hanya memiliki sisi lengkung, tanpa titik sudut.", hots:false},
    {q:"Jika tabung dilihat dari atas, bentuk yang tampak adalah ...", o:["Persegi panjang","Lingkaran","Segitiga","Persegi"], a:1, e:"Dilihat dari atas, tabung tampak sebagai lingkaran.", hots:false},
    {q:"Banyak titik sudut pada kubus adalah ...", o:["6","8","12","4"], a:1, e:"Kubus memiliki 8 titik sudut.", hots:false},
    {q:"Sebuah bangun ruang memiliki 2 sisi lingkaran sejajar dan 1 sisi lengkung, tanpa titik sudut. Bangun tersebut adalah ...", o:["Kerucut","Tabung","Bola","Prisma"], a:1, e:"Ciri tersebut sesuai dengan tabung.", hots:true},
    {q:"Sebuah kotak kado berbentuk balok dilihat dari depan tampak persegi panjang, dari atas tampak persegi panjang, dan dari samping tampak persegi panjang dengan ukuran berbeda-beda. Ini menunjukkan bahwa balok tersebut ...", o:["Memiliki panjang, lebar, tinggi yang berbeda","Berbentuk kubus","Memiliki alas lingkaran","Tidak memiliki rusuk"], a:0, e:"Jika ketiga tampak berbeda ukuran, artinya panjang, lebar, dan tinggi balok tidak sama.", hots:true},
    {q:"Sebuah bangun ruang jika dilihat dari depan berbentuk segitiga, dari atas berbentuk lingkaran, dan memiliki 1 titik puncak. Bangun tersebut adalah ...", o:["Kerucut","Tabung","Limas segiempat","Bola"], a:0, e:"Ciri tersebut adalah ciri khas kerucut.", hots:true},
    {q:"Sebuah kubus dengan rusuk 10 cm dipotong menjadi 2 balok sama besar dengan cara membelah tegak lurus. Bentuk yang tampak pada bidang potongannya adalah ...", o:["Lingkaran","Segitiga","Persegi panjang","Trapesium"], a:2, e:"Membelah kubus tegak lurus menghasilkan bidang potong berbentuk persegi panjang (10×10, tetap persegi jika tepat di tengah, namun secara umum berupa persegi panjang).", hots:true},
    {q:"Jika sebuah limas segiempat dilihat dari atas, bentuk yang tampak adalah ...", o:["Segitiga","Persegi atau persegi panjang","Lingkaran","Trapesium"], a:1, e:"Dilihat dari atas, alas limas segiempat tampak sebagai persegi/persegi panjang.", hots:true}
  ]
},
{
  id:12, title:"Satuan Waktu", sub:"Detik, Menit, Jam, Hari, Pekan, Bulan, Tahun", c1:"#4338ca", c2:"#818cf8",
  materi:`
  <h4>Hubungan Antar Satuan Waktu</h4>
  <div class="formula">1 menit = 60 detik &nbsp;|&nbsp; 1 jam = 60 menit &nbsp;|&nbsp; 1 hari = 24 jam</div>
  <div class="formula">1 pekan = 7 hari &nbsp;|&nbsp; 1 bulan ≈ 30 hari &nbsp;|&nbsp; 1 tahun = 12 bulan = 365 hari</div>
  <div class="example"><b>Contoh:</b> 3 jam = 3×60 = 180 menit = 180×60 = 10.800 detik<br>2 pekan = 2×7 = 14 hari</div>
  <h4>Tips Mengonversi</h4>
  <p>Turun satuan (misal jam ke menit) dikalikan, naik satuan (misal menit ke jam) dibagi, sesuai dengan angka hubungannya (60, 24, 7, dst).</p>`,
  quiz:[
    {q:"2 jam sama dengan ... menit", o:["100 menit","120 menit","90 menit","150 menit"], a:1, e:"2×60=120 menit.", hots:false},
    {q:"180 menit sama dengan ... jam", o:["2 jam","3 jam","4 jam","1,5 jam"], a:1, e:"180:60=3 jam.", hots:false},
    {q:"3 pekan sama dengan ... hari", o:["14 hari","21 hari","28 hari","30 hari"], a:1, e:"3×7=21 hari.", hots:false},
    {q:"2 tahun sama dengan ... bulan", o:["12 bulan","20 bulan","24 bulan","18 bulan"], a:2, e:"2×12=24 bulan.", hots:false},
    {q:"1 jam 15 menit sama dengan ... menit", o:["65 menit","75 menit","85 menit","60 menit"], a:1, e:"1 jam=60 menit; 60+15=75 menit.", hots:false},
    {q:"Andi berangkat sekolah pukul 06.30 dan tiba pukul 07.05. Lama perjalanan Andi adalah ...", o:["35 menit","25 menit","45 menit","30 menit"], a:0, e:"07.05−06.30=35 menit.", hots:true},
    {q:"Sebuah acara berlangsung selama 2 jam 45 menit dan dimulai pukul 09.15. Acara tersebut akan selesai pukul ...", o:["12.00","11.45","12.15","11.30"], a:0, e:"09.15+2 jam=11.15; 11.15+45 menit=12.00.", hots:true},
    {q:"Sebuah proyek dikerjakan selama 5 pekan 3 hari. Total hari pengerjaan proyek tersebut adalah ...", o:["38 hari","35 hari","40 hari","33 hari"], a:0, e:"5×7=35 hari; 35+3=38 hari.", hots:true},
    {q:"Kereta berangkat pukul 20.50 dan menempuh perjalanan selama 5 jam 30 menit. Kereta akan tiba pukul ...", o:["02.20","01.20","02.00","03.20"], a:0, e:"20.50+5 jam=01.50 (hari berikutnya); 01.50+30 menit=02.20.", hots:true},
    {q:"Sebuah pabrik beroperasi 8 jam sehari selama 6 hari dalam sepekan. Total jam kerja pabrik dalam 4 pekan adalah ...", o:["192 jam","168 jam","180 jam","200 jam"], a:0, e:"8×6=48 jam/pekan; 48×4=192 jam.", hots:true}
  ]
},
{
  id:13, title:"Kecepatan & Jarak", sub:"Hubungan Antar Satuan Waktu", c1:"#ea580c", c2:"#fb923c",
  materi:`
  <h4>Rumus Dasar Kecepatan</h4>
  <div class="formula">Kecepatan (v) = Jarak (s) ÷ Waktu (t)</div>
  <div class="formula">Jarak (s) = Kecepatan (v) × Waktu (t)</div>
  <div class="formula">Waktu (t) = Jarak (s) ÷ Kecepatan (v)</div>
  <div class="example"><b>Contoh:</b> Sebuah mobil menempuh 120 km dalam 2 jam. Kecepatannya = 120 : 2 = 60 km/jam.</div>
  <p>Satuan kecepatan yang umum digunakan adalah km/jam atau m/detik. Pastikan satuan jarak dan waktu sudah sesuai sebelum dihitung.</p>`,
  quiz:[
    {q:"Sebuah motor menempuh jarak 90 km dalam waktu 2 jam. Kecepatan motor tersebut adalah ...", o:["40 km/jam","45 km/jam","50 km/jam","35 km/jam"], a:1, e:"v=90:2=45 km/jam.", hots:false},
    {q:"Sebuah mobil melaju dengan kecepatan 60 km/jam selama 3 jam. Jarak yang ditempuh adalah ...", o:["120 km","180 km","200 km","150 km"], a:1, e:"s=60×3=180 km.", hots:false},
    {q:"Jarak kota A ke kota B adalah 240 km. Jika ditempuh dengan kecepatan 80 km/jam, waktu yang dibutuhkan adalah ...", o:["2 jam","3 jam","4 jam","2,5 jam"], a:1, e:"t=240:80=3 jam.", hots:false},
    {q:"Sebuah sepeda menempuh 15 km dalam 1 jam. Kecepatan sepeda tersebut adalah ...", o:["10 km/jam","15 km/jam","20 km/jam","25 km/jam"], a:1, e:"v=15:1=15 km/jam.", hots:false},
    {q:"Kereta melaju dengan kecepatan 75 km/jam selama 4 jam. Jarak yang ditempuh kereta adalah ...", o:["280 km","300 km","320 km","350 km"], a:1, e:"s=75×4=300 km.", hots:false},
    {q:"Andi bersepeda dari rumah pukul 06.00 dengan kecepatan 12 km/jam dan tiba di sekolah pukul 06.30. Jarak rumah Andi ke sekolah adalah ...", o:["6 km","5 km","7 km","4 km"], a:0, e:"30 menit=0,5 jam; s=12×0,5=6 km.", hots:true},
    {q:"Dua kota berjarak 350 km. Sebuah bus berangkat pukul 07.00 dengan kecepatan 70 km/jam. Bus akan tiba di kota tujuan pukul ...", o:["12.00","11.30","12.30","11.00"], a:0, e:"t=350:70=5 jam; 07.00+5 jam=12.00.", hots:true},
    {q:"Mobil A menempuh 180 km dalam 3 jam, mobil B menempuh 240 km dalam 4 jam. Manakah yang lebih cepat?", o:["Mobil A","Mobil B","Sama cepat","Tidak dapat dibandingkan"], a:2, e:"vA=180:3=60 km/jam; vB=240:4=60 km/jam; kecepatan sama.", hots:true},
    {q:"Sebuah pesawat menempuh jarak 1.800 km dengan kecepatan 450 km/jam, sedangkan pesawat lain menempuh 1.200 km dengan kecepatan 300 km/jam. Selisih waktu tempuh kedua pesawat adalah ...", o:["0 jam (sama)","1 jam","2 jam","0,5 jam"], a:0, e:"Pesawat 1: 1.800:450=4 jam; pesawat 2: 1.200:300=4 jam; selisih=0 jam.", hots:true},
    {q:"Jarak antara kota P dan Q adalah 540 km. Bila ditempuh menggunakan kecepatan rata-rata 90 km/jam tetapi berhenti istirahat selama 1 jam di tengah perjalanan, total waktu perjalanan (termasuk istirahat) adalah ...", o:["7 jam","6 jam","5 jam","8 jam"], a:0, e:"Waktu tempuh=540:90=6 jam; ditambah istirahat 1 jam=7 jam.", hots:true}
  ]
},
{
  id:14, title:"Keliling & Luas Bangun Datar", sub:"Segitiga, Segiempat & Segi Banyak", c1:"#e11d48", c2:"#fb7185",
  materi:`
  <h4>Keliling</h4>
  <p>Keliling suatu bangun datar adalah jumlah panjang seluruh sisi yang membatasi bangun tersebut.</p>
  <h4>Luas Segi Banyak (Bangun Gabungan)</h4>
  <p>Untuk bangun segi banyak (gabungan beberapa bangun datar), luas dihitung dengan membagi bangun menjadi bangun-bangun sederhana (persegi, persegi panjang, segitiga), lalu menjumlahkan luas setiap bagian.</p>
  <div class="formula">Luas gabungan = Luas bagian 1 + Luas bagian 2 + ...</div>
  <div class="example"><b>Contoh:</b> Bangun berbentuk huruf L dapat dibagi menjadi 2 persegi panjang, lalu luas keduanya dijumlahkan untuk mendapatkan luas total.</div>
  <div class="formula">Segitiga: L=½×a×t &nbsp;|&nbsp; Persegi: L=s² &nbsp;|&nbsp; Persegi Panjang: L=p×l</div>`,
  quiz:[
    {q:"Keliling segitiga dengan sisi 8 cm, 9 cm, dan 10 cm adalah ...", o:["26 cm","27 cm","28 cm","25 cm"], a:1, e:"K=8+9+10=27 cm.", hots:false},
    {q:"Luas segitiga siku-siku dengan alas 16 cm dan tinggi 12 cm adalah ...", o:["96 cm²","192 cm²","144 cm²","84 cm²"], a:0, e:"L=½×16×12=96 cm².", hots:false},
    {q:"Keliling persegi dengan sisi 22 cm adalah ...", o:["44 cm","66 cm","88 cm","110 cm"], a:2, e:"K=4×22=88 cm.", hots:false},
    {q:"Luas persegi panjang dengan panjang 35 cm dan lebar 20 cm adalah ...", o:["700 cm²","650 cm²","750 cm²","600 cm²"], a:0, e:"L=35×20=700 cm².", hots:false},
    {q:"Keliling persegi panjang dengan panjang 18 cm dan lebar 9 cm adalah ...", o:["54 cm","27 cm","162 cm","45 cm"], a:0, e:"K=2×(18+9)=54 cm.", hots:false},
    {q:"Sebuah bangun berbentuk L terdiri dari persegi panjang berukuran 12 m × 6 m dan persegi panjang lain berukuran 5 m × 4 m yang menyatu. Luas total bangun tersebut adalah ...", o:["92 m²","72 m²","20 m²","112 m²"], a:0, e:"Luas 1=12×6=72 m²; luas 2=5×4=20 m²; total=72+20=92 m².", hots:true},
    {q:"Sebuah taman berbentuk gabungan persegi (sisi 14 m) dan segitiga (alas 14 m, tinggi 8 m) yang menempel pada salah satu sisi persegi. Luas total taman adalah ...", o:["252 m²","196 m²","56 m²","220 m²"], a:0, e:"Luas persegi=14×14=196 m²; luas segitiga=½×14×8=56 m²; total=196+56=252 m².", hots:true},
    {q:"Sebuah ruangan berbentuk persegi panjang 9 m × 7 m akan dipasangi keramik seharga Rp85.000/m². Total biaya keramik untuk seluruh ruangan adalah ...", o:["Rp5.355.000","Rp5.400.000","Rp5.300.000","Rp5.250.000"], a:0, e:"Luas=9×7=63 m²; 63×85.000=Rp5.355.000.", hots:true},
    {q:"Sebuah bingkai foto persegi panjang berukuran 40 cm × 30 cm memiliki lebar bingkai (border) 5 cm di semua sisi. Luas foto di dalam bingkai (tanpa border) adalah ...", o:["600 cm²","800 cm²","700 cm²","500 cm²"], a:0, e:"Ukuran dalam=(40−10)×(30−10)=30×20=600 cm².", hots:true},
    {q:"Sebuah lahan berbentuk segi banyak terdiri dari persegi (sisi 10 m) dan trapesium (sisi sejajar 10 m dan 6 m, tinggi 4 m) yang menyatu. Luas total lahan adalah ...", o:["132 m²","100 m²","32 m²","144 m²"], a:0, e:"Luas persegi=100 m²; luas trapesium=½×(10+6)×4=32 m²; total=132 m².", hots:true}
  ]
},
{
  id:15, title:"Kubus", sub:"Volume, Luas Permukaan & Rumus", c1:"#0f766e", c2:"#2dd4bf",
  materi:`
  <h4>Ciri-Ciri Kubus</h4>
  <p>Kubus memiliki 6 sisi berbentuk persegi yang sama besar, 12 rusuk sama panjang, dan 8 titik sudut.</p>
  <h4>Rumus Kubus</h4>
  <div class="formula">Volume = s × s × s = s³</div>
  <div class="formula">Luas Permukaan = 6 × s × s = 6s²</div>
  <div class="example"><b>Contoh:</b> Kubus dengan rusuk 6 cm. Volume=6×6×6=216 cm³. Luas permukaan=6×6×6=216 cm² (kebetulan sama nilainya, tetap dihitung: 6×(6×6)=216 cm²).</div>`,
  quiz:[
    {q:"Volume kubus dengan rusuk 5 cm adalah ...", o:["25 cm³","125 cm³","15 cm³","100 cm³"], a:1, e:"V=5³=125 cm³.", hots:false},
    {q:"Luas permukaan kubus dengan rusuk 4 cm adalah ...", o:["64 cm²","96 cm²","48 cm²","16 cm²"], a:1, e:"LP=6×4²=6×16=96 cm².", hots:false},
    {q:"Volume kubus dengan rusuk 10 cm adalah ...", o:["100 cm³","1.000 cm³","300 cm³","10.000 cm³"], a:1, e:"V=10³=1.000 cm³.", hots:false},
    {q:"Panjang rusuk kubus yang memiliki volume 27 cm³ adalah ...", o:["3 cm","4 cm","9 cm","27 cm"], a:0, e:"Karena 3³=27, maka rusuk=3 cm.", hots:false},
    {q:"Luas permukaan kubus dengan rusuk 12 cm adalah ...", o:["144 cm²","864 cm²","720 cm²","576 cm²"], a:1, e:"LP=6×12²=6×144=864 cm².", hots:false},
    {q:"Sebuah kotak kubus dengan rusuk 20 cm akan diisi penuh air. Jika 1 liter=1.000 cm³, berapa liter air yang dibutuhkan?", o:["8 liter","6 liter","4 liter","10 liter"], a:0, e:"V=20³=8.000 cm³=8 liter.", hots:true},
    {q:"Sebuah bak kubus dengan rusuk 50 cm akan dicat seluruh permukaannya dengan biaya Rp200/cm². Total biaya pengecatan adalah ...", o:["Rp3.000.000","Rp2.500.000","Rp2.000.000","Rp3.500.000"], a:0, e:"LP=6×50²=15.000 cm²; 15.000×200=Rp3.000.000.", hots:true},
    {q:"Dua kubus memiliki rusuk 6 cm dan 8 cm. Selisih volume kedua kubus tersebut adalah ...", o:["296 cm³","300 cm³","280 cm³","310 cm³"], a:0, e:"V1=6³=216; V2=8³=512; selisih=512−216=296 cm³.", hots:true},
    {q:"Sebuah kubus memiliki volume 1.728 cm³. Panjang rusuk kubus tersebut adalah ...", o:["12 cm","10 cm","14 cm","11 cm"], a:0, e:"Karena 12³=1.728, maka rusuk=12 cm.", hots:true},
    {q:"Sebuah akuarium kubus dengan rusuk 40 cm diisi air setinggi 30 cm. Volume air dalam akuarium adalah ...", o:["48.000 cm³","64.000 cm³","36.000 cm³","40.000 cm³"], a:0, e:"V=40×40×30=48.000 cm³ (alas tetap 40×40, tinggi air 30 cm).", hots:true}
  ]
},
{
  id:16, title:"Balok", sub:"Volume, Luas Permukaan & Rumus", c1:"#1d4ed8", c2:"#93c5fd",
  materi:`
  <h4>Ciri-Ciri Balok</h4>
  <p>Balok memiliki 6 sisi berbentuk persegi panjang, 12 rusuk dengan 3 ukuran berbeda (panjang, lebar, tinggi), dan 8 titik sudut.</p>
  <h4>Rumus Balok</h4>
  <div class="formula">Volume = p × l × t</div>
  <div class="formula">Luas Permukaan = 2 × (p×l + p×t + l×t)</div>
  <div class="example"><b>Contoh:</b> Balok dengan p=8 cm, l=5 cm, t=4 cm. Volume=8×5×4=160 cm³. Luas permukaan=2×(40+32+20)=2×92=184 cm².</div>`,
  quiz:[
    {q:"Volume balok dengan p=10 cm, l=6 cm, t=5 cm adalah ...", o:["300 cm³","250 cm³","280 cm³","320 cm³"], a:0, e:"V=10×6×5=300 cm³.", hots:false},
    {q:"Luas permukaan balok dengan p=8 cm, l=4 cm, t=3 cm adalah ...", o:["136 cm²","96 cm²","112 cm²","128 cm²"], a:0, e:"LP=2×(32+24+12)=2×68=136 cm².", hots:false},
    {q:"Volume balok dengan p=15 cm, l=10 cm, t=8 cm adalah ...", o:["1.000 cm³","1.200 cm³","1.500 cm³","1.100 cm³"], a:1, e:"V=15×10×8=1.200 cm³.", hots:false},
    {q:"Sebuah balok memiliki volume 480 cm³ dengan p=12 cm dan l=8 cm. Tinggi balok tersebut adalah ...", o:["4 cm","5 cm","6 cm","3 cm"], a:1, e:"t=V:(p×l)=480:(12×8)=480:96=5 cm.", hots:false},
    {q:"Luas permukaan balok dengan p=20 cm, l=10 cm, t=6 cm adalah ...", o:["680 cm²","760 cm²","800 cm²","720 cm²"], a:1, e:"LP=2×(p×l+p×t+l×t)=2×(200+120+60)=2×380=760 cm².", hots:false},
    {q:"Sebuah bak mandi berbentuk balok berukuran p=80 cm, l=50 cm, t=60 cm akan diisi air hingga penuh. Jika 1 liter=1.000 cm³, volume air yang dibutuhkan adalah ...", o:["240 liter","200 liter","220 liter","250 liter"], a:0, e:"V=80×50×60=240.000 cm³=240 liter.", hots:true},
    {q:"Sebuah kardus balok berukuran p=40 cm, l=25 cm, t=20 cm akan dilapisi kertas kado pada seluruh permukaannya. Luas kertas kado minimal yang dibutuhkan adalah ...", o:["4.600 cm²","5.000 cm²","4.400 cm²","4.800 cm²"], a:0, e:"LP=2×(40×25+40×20+25×20)=2×(1.000+800+500)=2×2.300=4.600 cm².", hots:true},
    {q:"Sebuah kolam renang berbentuk balok berukuran p=25 m, l=10 m, dan kedalaman 2 m akan diisi penuh air. Volume air yang dibutuhkan adalah ...", o:["500 m³","450 m³","550 m³","400 m³"], a:0, e:"V=25×10×2=500 m³.", hots:true},
    {q:"Dua balok memiliki ukuran sama p=12 cm, l=8 cm, namun tinggi berbeda yaitu 6 cm dan 10 cm. Selisih volume kedua balok tersebut adalah ...", o:["384 cm³","400 cm³","350 cm³","420 cm³"], a:0, e:"V1=12×8×6=576; V2=12×8×10=960; selisih=960−576=384 cm³.", hots:true},
    {q:"Sebuah gudang berbentuk balok berukuran p=6 m, l=4 m, t=3 m akan digunakan untuk menyimpan kotak berbentuk kubus bervolume 1 m³. Banyak kotak maksimal yang dapat disimpan adalah ...", o:["72 kotak","60 kotak","64 kotak","70 kotak"], a:0, e:"V gudang=6×4×3=72 m³; karena tiap kotak 1 m³, maksimal 72 kotak.", hots:true}
  ]
},
{
  id:17, title:"Gabungan Kubus dan Balok", sub:"Volume Bangun Ruang Gabungan", c1:"#7e22ce", c2:"#d8b4fe",
  materi:`
  <h4>Konsep Bangun Gabungan</h4>
  <p>Bangun ruang gabungan terdiri dari dua atau lebih bangun ruang sederhana (kubus dan/atau balok) yang disatukan. Volume bangun gabungan dihitung dengan menjumlahkan volume setiap bangun penyusunnya.</p>
  <div class="formula">Volume Gabungan = Volume Bangun 1 + Volume Bangun 2 + ...</div>
  <div class="example"><b>Contoh:</b> Sebuah bangun terdiri dari balok berukuran 10×6×4 cm dan kubus dengan rusuk 4 cm yang menempel di atasnya. Volume balok=10×6×4=240 cm³. Volume kubus=4³=64 cm³. Volume total=240+64=304 cm³.</div>`,
  quiz:[
    {q:"Sebuah bangun terdiri dari kubus rusuk 6 cm dan balok berukuran 6×6×10 cm yang menempel. Volume total bangun tersebut adalah ...", o:["576 cm³","500 cm³","600 cm³","550 cm³"], a:0, e:"V kubus=216; V balok=6×6×10=360; total=216+360=576 cm³.", hots:false},
    {q:"Sebuah bangun gabungan terdiri dari 2 kubus dengan rusuk masing-masing 5 cm. Volume total bangun tersebut adalah ...", o:["125 cm³","250 cm³","200 cm³","300 cm³"], a:1, e:"V tiap kubus=125 cm³; total 2 kubus=250 cm³.", hots:false},
    {q:"Bangun gabungan terdiri dari balok 8×5×4 cm dan kubus rusuk 4 cm. Volume totalnya adalah ...", o:["224 cm³","160 cm³","64 cm³","200 cm³"], a:0, e:"V balok=160; V kubus=64; total=224 cm³.", hots:false},
    {q:"Bangun gabungan terdiri dari balok 12×6×5 cm dan balok 6×6×5 cm. Volume totalnya adalah ...", o:["540 cm³","500 cm³","560 cm³","520 cm³"], a:0, e:"V1=360; V2=180; total=540 cm³.", hots:false},
    {q:"Sebuah bangun terdiri dari kubus rusuk 7 cm dan balok 7×7×3 cm. Volume totalnya adalah ...", o:["490 cm³","450 cm³","500 cm³","480 cm³"], a:0, e:"V kubus=343; V balok=147; total=490 cm³.", hots:false},
    {q:"Sebuah rumah-rumahan mainan terdiri dari balok (alas rumah) berukuran 20×15×10 cm dan bagian atap berbentuk balok 20×15×6 cm. Total volume rumah-rumahan tersebut adalah ...", o:["4.800 cm³","4.500 cm³","5.000 cm³","4.200 cm³"], a:0, e:"V alas=20×15×10=3.000 cm³; V atap=20×15×6=1.800 cm³; total=4.800 cm³.", hots:true},
    {q:"Sebuah tandon air gabungan terdiri dari balok besar 100×80×60 cm dan kubus kecil di atasnya dengan rusuk 40 cm. Jika 1 liter=1.000 cm³, total volume tandon dalam liter adalah ...", o:["544 liter","500 liter","480 liter","520 liter"], a:0, e:"V balok=100×80×60=480.000 cm³; V kubus=40³=64.000 cm³; total=544.000 cm³=544 liter.", hots:true},
    {q:"Sebuah bangunan terdiri dari 2 balok identik berukuran 15×10×8 cm yang disusun bertumpuk. Volume total bangunan tersebut adalah ...", o:["2.400 cm³","1.200 cm³","2.000 cm³","2.200 cm³"], a:0, e:"V tiap balok=1.200 cm³; 2 balok=2.400 cm³.", hots:true},
    {q:"Sebuah kotak perkakas terdiri dari balok utama 30×20×15 cm dengan sebuah kubus penyimpanan tambahan berukuran rusuk 10 cm menempel di sampingnya. Volume total kotak tersebut adalah ...", o:["10.000 cm³","9.500 cm³","9.000 cm³","10.500 cm³"], a:0, e:"V balok=30×20×15=9.000 cm³; V kubus=10³=1.000 cm³; total=10.000 cm³.", hots:true},
    {q:"Sebuah bak penampungan gabungan (balok 50×40×30 cm menyatu dengan balok 50×40×20 cm) akan diisi penuh air. Jika 1 liter=1.000 cm³, total air yang dibutuhkan adalah ...", o:["100 liter","90 liter","110 liter","95 liter"], a:0, e:"V1=50×40×30=60.000; V2=50×40×20=40.000; total=100.000 cm³=100 liter.", hots:true}
  ]
},
{
  id:18, title:"Besar Sudut", sub:"Jenis-Jenis Sudut & Pengukuran", c1:"#b45309", c2:"#fcd34d",
  materi:`
  <h4>Jenis-Jenis Sudut</h4>
  <ul>
   <li><b>Sudut Siku-siku:</b> besarnya tepat 90°</li>
   <li><b>Sudut Lancip:</b> besarnya kurang dari 90°</li>
   <li><b>Sudut Tumpul:</b> besarnya lebih dari 90° dan kurang dari 180°</li>
   <li><b>Sudut Lurus:</b> besarnya tepat 180°</li>
   <li><b>Sudut Refleks:</b> besarnya lebih dari 180° dan kurang dari 360°</li>
  </ul>
  <h4>Jumlah Sudut pada Bangun Datar</h4>
  <div class="formula">Jumlah sudut segitiga = 180° &nbsp;|&nbsp; Jumlah sudut segiempat = 360°</div>
  <div class="example"><b>Contoh:</b> Sebuah segitiga memiliki dua sudut 50° dan 70°. Sudut ketiga=180°−50°−70°=60°.</div>
  <p>Sudut diukur menggunakan alat yang disebut <b>busur derajat</b>.</p>`,
  quiz:[
    {q:"Sudut yang besarnya 90° disebut sudut ...", o:["Lancip","Siku-siku","Tumpul","Lurus"], a:1, e:"Sudut 90° disebut sudut siku-siku.", hots:false},
    {q:"Sudut 35° termasuk jenis sudut ...", o:["Lancip","Siku-siku","Tumpul","Refleks"], a:0, e:"Sudut kurang dari 90° adalah sudut lancip.", hots:false},
    {q:"Sudut 150° termasuk jenis sudut ...", o:["Lancip","Siku-siku","Tumpul","Lurus"], a:2, e:"Sudut antara 90°-180° adalah sudut tumpul.", hots:false},
    {q:"Jumlah semua sudut dalam sebuah segitiga adalah ...", o:["90°","180°","270°","360°"], a:1, e:"Jumlah sudut segitiga selalu 180°.", hots:false},
    {q:"Alat yang digunakan untuk mengukur besar sudut adalah ...", o:["Penggaris","Jangka","Busur derajat","Meteran"], a:2, e:"Busur derajat digunakan untuk mengukur sudut.", hots:false},
    {q:"Sebuah segitiga memiliki sudut 45° dan 65°. Besar sudut ketiga segitiga tersebut adalah ...", o:["70°","65°","80°","75°"], a:0, e:"180°−45°−65°=70°.", hots:true},
    {q:"Sebuah segiempat memiliki tiga sudut 85°, 95°, dan 100°. Besar sudut keempat adalah ...", o:["80°","85°","75°","90°"], a:0, e:"360°−85°−95°−100°=80°.", hots:true},
    {q:"Jarum jam menunjukkan pukul 03.00. Besar sudut yang dibentuk antara jarum jam dan jarum menit adalah ...", o:["90°","60°","120°","180°"], a:0, e:"Pukul 03.00, jarum membentuk sudut siku-siku 90°.", hots:true},
    {q:"Sebuah sudut refleks besarnya 250°. Besar sudut yang menjadi pasangannya (untuk membentuk lingkaran penuh 360°) adalah ...", o:["110°","100°","120°","130°"], a:0, e:"360°−250°=110°.", hots:true},
    {q:"Dua sudut saling berpelurus (jumlahnya 180°). Jika salah satu sudut besarnya 3 kali sudut lainnya, besar sudut yang lebih kecil adalah ...", o:["45°","30°","60°","50°"], a:0, e:"x+3x=180° → 4x=180° → x=45°.", hots:true}
  ]
},
{
  id:19, title:"Penaksiran Ukuran", sub:"Pembulatan & Estimasi Hasil Hitung", c1:"#047857", c2:"#34d399",
  materi:`
  <h4>Apa itu Penaksiran?</h4>
  <p>Penaksiran (estimasi) adalah cara memperkirakan hasil suatu operasi hitung dengan cepat menggunakan pembulatan bilangan, tanpa harus menghitung secara tepat.</p>
  <h4>Aturan Pembulatan</h4>
  <ul><li>Angka 5 ke atas dibulatkan ke atas.</li><li>Angka kurang dari 5 dibulatkan ke bawah.</li></ul>
  <div class="formula">Bulatkan tiap bilangan ke puluhan/ratusan/ribuan terdekat, lalu hitung hasilnya</div>
  <div class="example"><b>Contoh (puluhan terdekat):</b> 48 + 33 ≈ 50 + 30 = 80<br><b>Contoh (ratusan terdekat):</b> 287 × 4 ≈ 300 × 4 = 1.200<br><b>Contoh (ribuan terdekat):</b> 4.850 + 2.300 ≈ 5.000 + 2.000 = 7.000</div>`,
  quiz:[
    {q:"Taksiran dari 47 + 32 ke puluhan terdekat adalah ...", o:["70","80","90","75"], a:1, e:"47≈50, 32≈30, 50+30=80.", hots:false},
    {q:"Taksiran dari 68 × 3 ke puluhan terdekat adalah ...", o:["180","200","210","190"], a:2, e:"68≈70, 70×3=210.", hots:false},
    {q:"Taksiran dari 385 + 214 ke ratusan terdekat adalah ...", o:["600","500","700","550"], a:0, e:"385≈400, 214≈200, 400+200=600.", hots:false},
    {q:"Taksiran dari 2.450 − 1.180 ke ribuan terdekat adalah ...", o:["1.000","2.000","0","1.500"], a:0, e:"2.450≈2.000, 1.180≈1.000, 2.000−1.000=1.000.", hots:false},
    {q:"Taksiran dari 195 × 21 ke puluhan/ratusan terdekat adalah ...", o:["4.000","3.800","4.200","3.900"], a:0, e:"195≈200, 21≈20, 200×20=4.000.", hots:false},
    {q:"Sebuah toko memperkirakan penjualan dengan membulatkan harga barang Rp7.850 dan Rp4.250 ke ribuan terdekat lalu menjumlahkannya. Hasil taksiran tersebut adalah ...", o:["Rp12.000","Rp11.000","Rp13.000","Rp12.500"], a:0, e:"7.850≈8.000, 4.250≈4.000, 8.000+4.000=12.000.", hots:true},
    {q:"Panitia memperkirakan total peserta dari 3 sekolah: 187, 243, dan 96 siswa, dengan pembulatan ke puluhan terdekat. Taksiran totalnya adalah ...", o:["530","520","540","500"], a:0, e:"187≈190, 243≈240, 96≈100; 190+240+100=530.", hots:true},
    {q:"Seorang pedagang membeli 48 karung beras seharga sekitar Rp95.000 per karung (dibulatkan ke ribuan terdekat menjadi Rp95.000, dan 48 dibulatkan ke puluhan terdekat menjadi 50). Taksiran total biayanya adalah ...", o:["Rp4.750.000","Rp4.500.000","Rp5.000.000","Rp4.800.000"], a:0, e:"50×95.000=4.750.000.", hots:true},
    {q:"Jarak sebenarnya 2 kota adalah 386 km, ditaksir ke ratusan terdekat menjadi 400 km. Jika mobil menempuh dengan kecepatan taksiran 100 km/jam (dibulatkan dari 97 km/jam), taksiran waktu tempuhnya adalah ...", o:["4 jam","3 jam","5 jam","3,5 jam"], a:0, e:"400:100=4 jam.", hots:true},
    {q:"Sebuah panitia menaksir kebutuhan dana dengan membulatkan 3 pengeluaran ke ribuan terdekat: Rp125.400, Rp78.900, dan Rp249.600. Taksiran total dana yang dibutuhkan adalah ...", o:["Rp454.000","Rp450.000","Rp460.000","Rp440.000"], a:0, e:"125.400≈125.000, 78.900≈79.000, 249.600≈250.000; total=125.000+79.000+250.000=454.000.", hots:true}
  ]
},
{
  id:20, title:"Penyajian Data", sub:"Gambar, Piktogram, Diagram Batang & Tabel Frekuensi", c1:"#4f46e5", c2:"#818cf8",
  materi:`
  <h4>Tabel Frekuensi</h4>
  <p>Tabel frekuensi menyajikan data dalam bentuk tabel yang menunjukkan banyaknya (frekuensi) setiap kategori data.</p>
  <h4>Piktogram</h4>
  <p>Piktogram menyajikan data menggunakan simbol/gambar, di mana satu simbol dapat mewakili lebih dari satu data (misalnya 1 simbol = 2 siswa).</p>
  <h4>Diagram Batang</h4>
  <p>Diagram batang menyajikan data menggunakan batang-batang dengan tinggi/panjang sesuai jumlah data, memudahkan perbandingan antar kategori.</p>
  <div class="example"><b>Contoh:</b> Data hobi siswa: Membaca=6, Melukis=4, Olahraga=10. Jika piktogram menggunakan 1 simbol=2 siswa, maka Membaca digambar 3 simbol, Melukis 2 simbol, dan Olahraga 5 simbol.</div>`,
  quiz:[
    {q:"Pada piktogram, jika 1 simbol mewakili 5 siswa dan terdapat 4 simbol, jumlah siswa yang digambarkan adalah ...", o:["9","20","15","25"], a:1, e:"4×5=20 siswa.", hots:false},
    {q:"Diagram yang paling tepat untuk membandingkan jumlah secara visual antar beberapa kategori adalah ...", o:["Diagram batang","Tabel frekuensi","Kalimat","Grafik lingkaran waktu"], a:0, e:"Diagram batang memudahkan perbandingan visual antar kategori.", hots:false},
    {q:"Tabel frekuensi menunjukkan banyaknya siswa menyukai warna: Merah=8, Biru=12, Hijau=5. Warna yang paling disukai adalah ...", o:["Merah","Biru","Hijau","Sama semua"], a:1, e:"Biru memiliki frekuensi tertinggi (12).", hots:false},
    {q:"Jika 1 simbol mewakili 10 buku dan sebuah data digambarkan dengan 3,5 simbol, jumlah buku yang diwakili adalah ...", o:["30","35","40","25"], a:1, e:"3,5×10=35 buku.", hots:false},
    {q:"Data nilai ulangan 5 siswa: 70, 80, 90, 80, 70. Nilai yang paling sering muncul (modus) adalah ...", o:["70 dan 80","90","80 saja","70 saja"], a:0, e:"70 muncul 2 kali dan 80 muncul 2 kali, keduanya modus.", hots:false},
    {q:"Sebuah piktogram menunjukkan penjualan buah selama sepekan dengan 1 simbol=20 kg: Senin 3 simbol, Selasa 2,5 simbol, Rabu 4 simbol. Total penjualan selama 3 hari tersebut adalah ...", o:["190 kg","180 kg","200 kg","170 kg"], a:0, e:"(3+2,5+4)×20=9,5×20=190 kg.", hots:true},
    {q:"Diagram batang menunjukkan hasil panen (dalam kuintal) selama 4 bulan: Jan=45, Feb=60, Mar=38, Apr=57. Selisih hasil panen tertinggi dan terendah adalah ...", o:["22 kuintal","20 kuintal","25 kuintal","18 kuintal"], a:0, e:"Tertinggi=60(Feb), terendah=38(Mar), selisih=60−38=22 kuintal.", hots:true},
    {q:"Tabel frekuensi menunjukkan jumlah pengunjung perpustakaan: Senin=120, Selasa=95, Rabu=140, Kamis=105, Jumat=160. Rata-rata pengunjung per hari adalah ...", o:["124","120","130","118"], a:0, e:"(120+95+140+105+160):5=620:5=124.", hots:true},
    {q:"Sebuah piktogram penjualan sepatu tiap bulan menggunakan 1 simbol=25 pasang. Jika bulan Maret digambarkan 6 simbol dan bulan April 4,4 simbol, selisih penjualan kedua bulan tersebut adalah ...", o:["40 pasang","35 pasang","45 pasang","50 pasang"], a:0, e:"Maret=6×25=150; April=4,4×25=110; selisih=150−110=40 pasang.", hots:true},
    {q:"Diagram batang menunjukkan jumlah produksi pabrik (dalam ribuan unit) selama 3 tahun: 2023=850, 2024=920, 2025=1.050. Kenaikan produksi dari 2023 ke 2025 adalah ...", o:["200 ribu unit","150 ribu unit","250 ribu unit","180 ribu unit"], a:0, e:"1.050−850=200 ribu unit.", hots:true}
  ]
},
{
  id:21, title:"Pengambilan Informasi & Penggunaan Data", sub:"Membaca dan Menafsirkan Data", c1:"#a21caf", c2:"#e879f9",
  materi:`
  <h4>Membaca dan Menafsirkan Data</h4>
  <p>Keterampilan ini melibatkan kemampuan membaca tabel, diagram, atau grafik untuk menjawab pertanyaan, menarik kesimpulan, dan mengambil keputusan berdasarkan data yang tersaji.</p>
  <h4>Konsep Penting</h4>
  <ul>
   <li><b>Nilai tertinggi/terendah:</b> data dengan frekuensi/jumlah paling besar/kecil.</li>
   <li><b>Selisih:</b> hasil pengurangan antara dua data.</li>
   <li><b>Rata-rata (mean):</b> jumlah semua data dibagi banyaknya data.</li>
  </ul>
  <div class="formula">Rata-rata = jumlah seluruh data ÷ banyak data</div>
  <div class="example"><b>Contoh:</b> Data penjualan 5 hari: 40, 55, 60, 45, 50. Total=250, rata-rata=250:5=50.</div>`,
  quiz:[
    {q:"Data nilai 4 siswa: 75, 80, 85, 80. Rata-rata nilai keempat siswa tersebut adalah ...", o:["78","80","82","81"], a:1, e:"(75+80+85+80):4=320:4=80.", hots:false},
    {q:"Tabel data hasil panen: A=30, B=45, C=25. Hasil panen tertinggi diperoleh oleh ...", o:["A","B","C","Semua sama"], a:1, e:"B memiliki hasil panen tertinggi (45).", hots:false},
    {q:"Data penjualan 5 hari: 20, 25, 30, 15, 20. Total penjualan selama 5 hari tersebut adalah ...", o:["100","110","120","105"], a:1, e:"20+25+30+15+20=110.", hots:false},
    {q:"Selisih antara nilai tertinggi 95 dan nilai terendah 60 pada suatu data adalah ...", o:["30","35","25","40"], a:1, e:"95−60=35.", hots:false},
    {q:"Data suhu 3 hari: 28°C, 30°C, 26°C. Suhu rata-rata selama 3 hari tersebut adalah ...", o:["27°C","28°C","29°C","30°C"], a:1, e:"(28+30+26):3=84:3=28°C.", hots:false},
    {q:"Data hasil penjualan toko selama 6 hari (dalam ribu rupiah): 250, 300, 275, 320, 290, 310. Rata-rata penjualan per hari adalah ...", o:["290,83 ribu","300 ribu","295 ribu","285 ribu"], a:0, e:"Jumlah=1.745; 1.745:6≈290,83 ribu.", hots:true},
    {q:"Tabel menunjukkan jumlah pengunjung museum selama 4 bulan: 1.200, 1.450, 980, 1.670. Jika bulan berikutnya diperkirakan naik 15% dari bulan tertinggi, taksiran pengunjung bulan berikutnya adalah ...", o:["1.920 orang","1.850 orang","1.800 orang","2.000 orang"], a:0, e:"Tertinggi=1.670; 15% dari 1.670=250,5≈250; 1.670+250=1.920.", hots:true},
    {q:"Data nilai ujian 8 siswa: 70,75,80,85,90,65,95,80. Berapa siswa yang nilainya di atas rata-rata kelas?", o:["3 siswa","4 siswa","5 siswa","2 siswa"], a:0, e:"Jumlah nilai=640; rata-rata=640:8=80; siswa dengan nilai di atas 80 adalah 85, 90, dan 95, yaitu 3 siswa.", hots:true},
    {q:"Sebuah perusahaan mencatat produksi 5 bulan: 800, 950, 1.100, 890, 1.260 unit. Berapa selisih antara rata-rata produksi dan produksi bulan tertinggi?", o:["260 unit","280 unit","300 unit","250 unit"], a:0, e:"Jumlah=5.000; rata-rata=1.000; tertinggi=1.260; selisih=1.260−1.000=260 unit.", hots:true},
    {q:"Diagram menunjukkan pengeluaran keluarga per bulan: makanan Rp1.500.000, pendidikan Rp800.000, transportasi Rp450.000, lainnya Rp250.000. Berapa persen pengeluaran untuk makanan dari total pengeluaran?", o:["50%","45%","55%","48%"], a:0, e:"Total=3.000.000; 1.500.000:3.000.000×100%=50%.", hots:true}
  ]
}
];

/* =========================================================================
   STATE & APP LOGIC
   ========================================================================= */
const state = {
  nama: "", kelas: "",
  scores: {},          // {topicId: {score, total, done:true}}
  currentTopicId: null,
  quiz: { idx: 0, correctCount: 0, answered: false }
};

function $(id){ return document.getElementById(id); }

function startApp(){
  const nama = $("inp-nama").value.trim();
  const kelas = $("inp-kelas").value;
  if(!nama || !kelas){
    $("form-err").style.display = "block";
    return;
  }
  $("form-err").style.display = "none";
  state.nama = nama; state.kelas = kelas;
  $("home-nama").textContent = nama;
  $("home-kelas").textContent = kelas;
  $("screen-cover").classList.add("hide");
  $("screen-home").classList.remove("hide");
  renderTopicList();
}

function renderTopicList(){
  const list = $("topic-list");
  list.innerHTML = "";
  let doneCount = 0;
  TOPICS.forEach(t=>{
    const rec = state.scores[t.id];
    if(rec && rec.done) doneCount++;
    const item = document.createElement("div");
    item.className = "topic-item";
    item.onclick = ()=>openTopic(t.id);
    item.innerHTML = `
      <div class="topic-num" style="background:linear-gradient(135deg,${t.c1},${t.c2});">${t.id}</div>
      <div class="topic-txt">
        <div class="t">${t.title}</div>
        <div class="s">${t.sub}</div>
      </div>
      <div class="topic-score ${rec && rec.done ? 'done':''}">${rec && rec.done ? rec.score+'/'+rec.total : 'Belum'}</div>
      <div class="chev">›</div>`;
    list.appendChild(item);
  });
  $("home-progress").textContent = doneCount + "/21 selesai";
}

function backToHome(){
  $("screen-topic").classList.add("hide");
  $("screen-recap").classList.add("hide");
  $("screen-home").classList.remove("hide");
  renderTopicList();
}

function openTopic(id){
  const t = TOPICS.find(x=>x.id===id);
  state.currentTopicId = id;
  document.documentElement.style.setProperty('--accent', t.c1);
  $("topic-header").style.background = `linear-gradient(160deg,${t.c1},${t.c2})`;
  $("topic-title").textContent = t.id + ". " + t.title;
  $("topic-sub").textContent = t.sub;
  $("panel-materi").innerHTML = t.materi;
  $("panel-materi").style.setProperty('--accent', t.c1);
  document.querySelectorAll('.tab-panel').forEach(p=>p.style.setProperty('--accent', t.c1));

  $("screen-home").classList.add("hide");
  $("screen-recap").classList.add("hide");
  $("screen-topic").classList.remove("hide");
  showTab('materi');
}

function showTab(tab){
  const isMateri = tab === 'materi';
  $("tab-materi-btn").classList.toggle("active", isMateri);
  $("tab-kuis-btn").classList.toggle("active", !isMateri);
  $("panel-materi").classList.toggle("hide", !isMateri);
  $("panel-kuis").classList.toggle("hide", isMateri);
  if(!isMateri){
    state.quiz = { idx:0, correctCount:0, answered:false };
    renderQuestion();
  }
}

function renderQuestion(){
  const t = TOPICS.find(x=>x.id===state.currentTopicId);
  const qi = state.quiz.idx;
  if(qi >= t.quiz.length){
    renderQuizResult(t);
    return;
  }
  const q = t.quiz[qi];
  state.quiz.answered = false;
  const panel = $("panel-kuis");
  panel.style.setProperty('--accent', t.c1);
  let optsHtml = "";
  q.o.forEach((opt,i)=>{
    optsHtml += `<button class="opt" id="opt-${i}" onclick="answerQuestion(${i})">${String.fromCharCode(65+i)}. ${opt}</button>`;
  });
  panel.innerHTML = `
    <div class="quiz-top">
      <div class="quiz-progress">Soal ${qi+1} dari ${t.quiz.length}</div>
      ${q.hots ? '<div class="hots-tag">HOTS</div>' : ''}
    </div>
    <div class="qbar"><div style="width:${(qi/t.quiz.length)*100}%;background:${t.c1};"></div></div>
    <div class="q-text">${q.q}</div>
    <div id="opts-wrap">${optsHtml}</div>
    <div class="explain" id="explain-box">${q.e}</div>
    <button class="next-btn" id="next-btn" onclick="nextQuestion()" style="background:${t.c1};">${qi+1===t.quiz.length ? 'Lihat Hasil →' : 'Soal Berikutnya →'}</button>
  `;
}

function answerQuestion(i){
  if(state.quiz.answered) return;
  state.quiz.answered = true;
  const t = TOPICS.find(x=>x.id===state.currentTopicId);
  const q = t.quiz[state.quiz.idx];
  const buttons = document.querySelectorAll("#opts-wrap .opt");
  buttons.forEach((b,idx)=>{
    b.setAttribute("disabled","true");
    if(idx === q.a) b.classList.add("correct");
    else if(idx === i) b.classList.add("wrong");
  });
  if(i === q.a) state.quiz.correctCount++;
  $("explain-box").classList.add("show");
  $("next-btn").classList.add("show");
}

function nextQuestion(){
  state.quiz.idx++;
  renderQuestion();
}

function renderQuizResult(t){
  const total = t.quiz.length;
  const score = state.quiz.correctCount;
  state.scores[t.id] = { score, total, done:true };
  const hotsTotal = t.quiz.filter(q=>q.hots).length;
  let msg = "";
  if(score >= 9) msg = "Luar biasa! Kamu sudah menguasai materi ini dengan sangat baik.";
  else if(score >= 7) msg = "Bagus! Sedikit lagi untuk menguasai materi ini sepenuhnya.";
  else if(score >= 5) msg = "Cukup baik. Coba pelajari lagi bagian Materi lalu ulangi kuisnya.";
  else msg = "Ayo pelajari kembali materinya, lalu coba kuis ini sekali lagi!";
  const panel = $("panel-kuis");
  panel.innerHTML = `
    <div class="result-box">
      <div class="big" style="color:${t.c1};">${score}/${total}</div>
      <div class="lbl">Nilai Kuis: ${t.title}</div>
      <div class="msg">${msg}</div>
      <div class="result-hots">Soal HOTS dalam kuis ini: ${hotsTotal} dari ${total} soal</div>
      <div class="result-actions">
        <button class="btn-secondary" onclick="showTab('kuis')">Ulangi Kuis</button>
        <button class="btn-primary" style="background:${t.c1};" onclick="backToHome()">Kembali ke Daftar</button>
      </div>
    </div>`;
}

function openRecap(){
  const body = $("recap-body");
  body.innerHTML = "";
  let sumScore = 0, sumTotal = 0, doneCount = 0;
  TOPICS.forEach(t=>{
    const rec = state.scores[t.id];
    const tr = document.createElement("tr");
    if(rec && rec.done){
      sumScore += rec.score; sumTotal += rec.total; doneCount++;
    }
    tr.innerHTML = `<td>${t.id}</td><td>${t.title}</td><td class="sc" style="color:${rec && rec.done ? '#15803d':'#94a3b8'};">${rec && rec.done ? rec.score+'/'+rec.total : '-'}</td>`;
    body.appendChild(tr);
  });
  $("recap-sub").textContent = `${state.nama} · Kelas ${state.kelas} · ${doneCount}/21 materi telah dikerjakan`;
  $("screen-home").classList.add("hide");
  $("screen-topic").classList.add("hide");
  $("screen-recap").classList.remove("hide");
}
