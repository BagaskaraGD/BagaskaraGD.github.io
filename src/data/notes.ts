export type NoteColor = 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose' | 'blue';

export interface NoteCategory {
  id: string;
  label: string;
  color: NoteColor;
}

export interface Note {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  color: NoteColor;
  command: string;
  description: string;
  slug?: string;
}

export const noteCategories: NoteCategory[] = [
  { id: 'git',      label: 'Git',      color: 'rose' },
  { id: 'laravel',  label: 'Laravel',  color: 'cyan' },
  { id: 'docker',   label: 'Docker',   color: 'purple' },
  { id: 'flutter',  label: 'Flutter',  color: 'amber' },
  { id: 'mysql',    label: 'MySQL',    color: 'emerald' },
  { id: 'terminal', label: 'Terminal', color: 'blue' },
  { id: 'nestJS',    label: 'nestJS',    color: 'amber' },
];

export const allNotes: Note[] = [
  // ── Git ───────────────────────────────────────────────────
  {
    id: 'git-reset',
    title: 'Git Reset to Remote',
    category: 'Git', categoryId: 'git', color: 'rose',
    command: 'git fetch origin\ngit reset --hard origin/main',
    description:
      'Hapus perubahan lokal dan reset branch agar sama persis dengan remote. Gunakan saat ingin membuang commit lokal dan mulai dari kondisi bersih.',
    slug: 'git-reset-to-remote',
  },
  {
    id: 'git-stash',
    title: 'Git Stash & Pop',
    category: 'Git', categoryId: 'git', color: 'rose',
    command: 'git stash\ngit stash pop',
    description:
      'Simpan sementara perubahan yang belum siap di-commit agar bisa pindah branch dengan aman. Pop akan mengembalikan perubahan yang disimpan.',
    slug: 'git-stash-pop',
  },
  {
    id: 'git-branch-cleanup',
    title: 'Delete Merged Branches',
    category: 'Git', categoryId: 'git', color: 'rose',
    command: 'git branch --merged | grep -v "\\*\\|main\\|dev" | xargs git branch -d',
    description:
      'Hapus semua branch lokal yang sudah digabungkan ke branch aktif. Membantu menjaga daftar branch tetap rapi.',
    slug: 'git-delete-merged-branches',
  },
  {
    id: 'git-log-pretty',
    title: 'Pretty Git Log One-Line',
    category: 'Git', categoryId: 'git', color: 'rose',
    command: 'git log --oneline --graph --decorate --all',
    description:
      'Tampilkan riwayat commit dalam bentuk grafik branch yang ringkas. Cocok untuk memahami struktur repository secara cepat.',
    slug: 'git-log-pretty',
  },

  // ── Laravel ───────────────────────────────────────────────
  {
    id: 'laravel-fresh',
    title: 'Laravel Fresh Migration',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan migrate:fresh --seed',
    description:
      'Hapus semua tabel, jalankan ulang seluruh migration, lalu isi database dengan seeder. Berguna saat schema sering berubah di development lokal.',
    slug: 'laravel-fresh-migration',
  },
  {
    id: 'artisan-make',
    title: 'Artisan Make All',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan make:model Item -mcr',
    description:
      'Buat Model, Migration, dan Controller resource dalam satu command. Cara cepat untuk menyiapkan resource baru di Laravel.',
    slug: 'artisan-make-all',
  },
  {
    id: 'laravel-cache-clear',
    title: 'Clear All Caches',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan optimize:clear',
    description:
      'Bersihkan config, route, view, event, dan cache dalam satu command. Jalankan saat perubahan konfigurasi belum terlihat di aplikasi.',
    slug: 'laravel-cache-clear',
  },
  {
    id: 'laravel-storage-link',
    title: 'Create Storage Symlink',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan storage:link',
    description:
      'Buat symbolic link dari public/storage ke storage/app/public. Dibutuhkan agar file upload bisa diakses melalui web.',
    slug: 'laravel-storage-link',
  },
  {
    id: 'laravel-queue',
    title: 'Run Queue Worker',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan queue:work --tries=3 --timeout=90',
    description:
      'Jalankan queue worker untuk memproses job. Gunakan --tries untuk membatasi percobaan ulang dan --timeout untuk menghentikan job yang macet.',
    slug: 'laravel-queue-worker',
  },

  // ── Docker ────────────────────────────────────────────────
  {
    id: 'docker-up',
    title: 'Docker Compose Up',
    category: 'Docker', categoryId: 'docker', color: 'purple',
    command: 'docker compose up -d --build',
    description:
      'Jalankan semua service di docker-compose.yml dalam mode background dan rebuild image jika Dockerfile berubah.',
    slug: 'docker-compose-up',
  },
  {
    id: 'docker-exec',
    title: 'Exec Into Container',
    category: 'Docker', categoryId: 'docker', color: 'purple',
    command: 'docker compose exec app bash',
    description:
      'Buka shell interaktif di dalam container yang sedang berjalan. Ganti "app" dengan nama service dari docker-compose.yml.',
    slug: 'docker-exec-container',
  },
  {
    id: 'docker-prune',
    title: 'Docker System Prune',
    category: 'Docker', categoryId: 'docker', color: 'purple',
    command: 'docker system prune -af --volumes',
    description:
      'Hapus container yang berhenti, image tidak terpakai, network tidak terpakai, dan volume menggantung. Berguna untuk mengosongkan ruang disk.',
    slug: 'docker-system-prune',
  },

  // ── Flutter ───────────────────────────────────────────────
  {
    id: 'flutter-pub',
    title: 'Flutter Pub Get & Run',
    category: 'Flutter', categoryId: 'flutter', color: 'amber',
    command: 'flutter pub get\nflutter run -d chrome',
    description:
      'Install dependency lalu jalankan aplikasi di Chrome. Berguna untuk mengetes Flutter Web secara lokal atau debug layout widget.',
    slug: 'flutter-pub-get',
  },
  {
    id: 'flutter-build',
    title: 'Build APK Release',
    category: 'Flutter', categoryId: 'flutter', color: 'amber',
    command: 'flutter build apk --release --split-per-abi',
    description:
      'Build APK release yang dipisah berdasarkan arsitektur CPU. Hasil APK biasanya lebih kecil dibanding satu file besar untuk semua arsitektur.',
    slug: 'flutter-build-apk',
  },

  // ── MySQL ─────────────────────────────────────────────────
  {
    id: 'mysql-dump',
    title: 'Export Database Dump',
    category: 'MySQL', categoryId: 'mysql', color: 'emerald',
    command: 'mysqldump -u root -p dbname > backup.sql',
    description:
      'Export seluruh database ke file SQL. Jalankan tanpa --no-data untuk menyertakan isi tabel, atau tambahkan opsi itu jika hanya butuh struktur.',
    slug: 'mysql-dump',
  },
  {
    id: 'mysql-import',
    title: 'Import SQL Dump',
    category: 'MySQL', categoryId: 'mysql', color: 'emerald',
    command: 'mysql -u root -p dbname < backup.sql',
    description:
      'Import file SQL yang sudah diexport ke dalam database. Buat database tujuan terlebih dahulu jika belum ada.',
    slug: 'mysql-import',
  },
  {
    id: 'mysql-show-slow',
    title: 'Find Slow Queries',
    category: 'MySQL', categoryId: 'mysql', color: 'emerald',
    command: 'SHOW FULL PROCESSLIST;\nSHOW STATUS LIKE "Slow_queries";',
    description:
      'Cek query yang sedang berjalan dan jumlah slow query. Berguna saat aplikasi terasa lambat dan kamu curiga ada N+1 atau index yang kurang.',
    slug: 'mysql-slow-queries',
  },

  // ── Terminal ──────────────────────────────────────────────
  {
    id: 'terminal-find-port',
    title: 'Find Process Using Port',
    category: 'Terminal', categoryId: 'terminal', color: 'blue',
    command: 'lsof -i :8000\n# Windows: netstat -ano | findstr :8000',
    description:
      'Cari proses yang sedang memakai port tertentu. Berguna saat muncul error "port already in use".',
    slug: 'terminal-find-port',
  },
  {
    id: 'terminal-disk-usage',
    title: 'Check Disk Usage',
    category: 'Terminal', categoryId: 'terminal', color: 'blue',
    command: 'du -sh * | sort -rh | head -20',
    description:
      'Tampilkan 20 item terbesar di folder saat ini, diurutkan berdasarkan ukuran. Cocok untuk mencari penyebab disk cepat penuh.',
    slug: 'terminal-disk-usage',
  },
  // ── Nest JS ──────────────────────────────────────────────
  {
    id: 'install-global-nest',
    title: 'Install NestJS CLI',
    category: 'NestJS', categoryId: 'nestjs', color: 'amber',
    command: 'npm i -g @nestjs/cli',
    description:
      'Install NestJS CLI secara global. Dengan ini kamu bisa membuat dan mengelola project NestJS langsung dari terminal.',
    slug: 'install-global-nest',
  },
  {
    id: 'create-nest-project',
    title: 'Create NestJS Project',
    category: 'NestJS', categoryId: 'nestjs', color: 'amber',
    command: 'nest new project-name',
    description:
      'Buat project NestJS baru dengan nama yang ditentukan. CLI akan meminta pilihan package manager dan menyiapkan struktur project.',
    slug: 'create-nest-project',
  },
  {
    id: 'start-nest',
    title: 'Start NestJS Application',
    category: 'NestJS', categoryId: 'nestjs', color: 'amber',
    command: 'npm run start',
    description:
      'Jalankan aplikasi NestJS menggunakan script start default. Cocok dipakai setelah dependency dan environment variable sudah siap.',
    slug: '',
  },
  {
    id: 'start-nest-dev',
    title: 'Start NestJS in Development Mode',
    category: 'NestJS', categoryId: 'nestjs', color: 'amber',
    command: 'npm run start:dev',
    description:
      'Jalankan aplikasi NestJS dalam mode development dengan file watching aktif. Server akan restart otomatis saat ada perubahan source file.',
    slug: 'start-nest-dev',
  }
];


// Preview subset for Home page (first 6)
export const notesPreview = allNotes.slice(0, 6);
