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
];

export const allNotes: Note[] = [
  // ── Git ───────────────────────────────────────────────────
  {
    id: 'git-reset',
    title: 'Git Reset to Remote',
    category: 'Git', categoryId: 'git', color: 'rose',
    command: 'git fetch origin\ngit reset --hard origin/main',
    description:
      'Wipe local changes and hard-reset your branch to match the remote. Use when you want to discard all local commits and get a clean slate.',
    slug: 'git-reset-to-remote',
  },
  {
    id: 'git-stash',
    title: 'Git Stash & Pop',
    category: 'Git', categoryId: 'git', color: 'rose',
    command: 'git stash\ngit stash pop',
    description:
      'Temporarily shelve work-in-progress changes so you can switch branches without committing. Pop restores the stashed changes.',
    slug: 'git-stash-pop',
  },
  {
    id: 'git-branch-cleanup',
    title: 'Delete Merged Branches',
    category: 'Git', categoryId: 'git', color: 'rose',
    command: 'git branch --merged | grep -v "\\*\\|main\\|dev" | xargs git branch -d',
    description:
      'Delete all local branches that have already been merged into the current branch. Keeps your branch list clean.',
    slug: 'git-delete-merged-branches',
  },
  {
    id: 'git-log-pretty',
    title: 'Pretty Git Log One-Line',
    category: 'Git', categoryId: 'git', color: 'rose',
    command: 'git log --oneline --graph --decorate --all',
    description:
      'Display the full commit history as a compact, branched graph. Great for understanding the repository structure at a glance.',
    slug: 'git-log-pretty',
  },

  // ── Laravel ───────────────────────────────────────────────
  {
    id: 'laravel-fresh',
    title: 'Laravel Fresh Migration',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan migrate:fresh --seed',
    description:
      'Drop all tables, re-run all migrations, then seed the database. Essential during local development when schema changes frequently.',
    slug: 'laravel-fresh-migration',
  },
  {
    id: 'artisan-make',
    title: 'Artisan Make All',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan make:model Item -mcr',
    description:
      'Create a Model, Migration, Controller (resource) in one command. The fastest way to scaffold a new resource in Laravel.',
    slug: 'artisan-make-all',
  },
  {
    id: 'laravel-cache-clear',
    title: 'Clear All Caches',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan optimize:clear',
    description:
      'Clear config, route, view, event, and cache in one command. Run this when config changes don\'t seem to take effect.',
    slug: 'laravel-cache-clear',
  },
  {
    id: 'laravel-storage-link',
    title: 'Create Storage Symlink',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan storage:link',
    description:
      'Create a symbolic link from public/storage to storage/app/public. Required for serving uploaded files via the web.',
    slug: 'laravel-storage-link',
  },
  {
    id: 'laravel-queue',
    title: 'Run Queue Worker',
    category: 'Laravel', categoryId: 'laravel', color: 'cyan',
    command: 'php artisan queue:work --tries=3 --timeout=90',
    description:
      'Start a queue worker that processes jobs. Use --tries to limit retry attempts and --timeout to kill stuck jobs.',
    slug: 'laravel-queue-worker',
  },

  // ── Docker ────────────────────────────────────────────────
  {
    id: 'docker-up',
    title: 'Docker Compose Up',
    category: 'Docker', categoryId: 'docker', color: 'purple',
    command: 'docker compose up -d --build',
    description:
      'Start all services defined in docker-compose.yml in detached mode and rebuild images if Dockerfile changed.',
    slug: 'docker-compose-up',
  },
  {
    id: 'docker-exec',
    title: 'Exec Into Container',
    category: 'Docker', categoryId: 'docker', color: 'purple',
    command: 'docker compose exec app bash',
    description:
      'Open an interactive shell inside a running container. Replace "app" with your service name from docker-compose.yml.',
    slug: 'docker-exec-container',
  },
  {
    id: 'docker-prune',
    title: 'Docker System Prune',
    category: 'Docker', categoryId: 'docker', color: 'purple',
    command: 'docker system prune -af --volumes',
    description:
      'Remove all stopped containers, unused images, unused networks, and dangling volumes. Frees significant disk space.',
    slug: 'docker-system-prune',
  },

  // ── Flutter ───────────────────────────────────────────────
  {
    id: 'flutter-pub',
    title: 'Flutter Pub Get & Run',
    category: 'Flutter', categoryId: 'flutter', color: 'amber',
    command: 'flutter pub get\nflutter run -d chrome',
    description:
      'Install dependencies then run the app on Chrome. Useful for testing Flutter Web locally or debugging widget layout.',
    slug: 'flutter-pub-get',
  },
  {
    id: 'flutter-build',
    title: 'Build APK Release',
    category: 'Flutter', categoryId: 'flutter', color: 'amber',
    command: 'flutter build apk --release --split-per-abi',
    description:
      'Build a release APK split by CPU architecture. Produces smaller APKs than a fat binary.',
    slug: 'flutter-build-apk',
  },

  // ── MySQL ─────────────────────────────────────────────────
  {
    id: 'mysql-dump',
    title: 'Export Database Dump',
    category: 'MySQL', categoryId: 'mysql', color: 'emerald',
    command: 'mysqldump -u root -p dbname > backup.sql',
    description:
      'Export a full database dump to a SQL file. Run without --no-data to include table data, or add it to export structure only.',
    slug: 'mysql-dump',
  },
  {
    id: 'mysql-import',
    title: 'Import SQL Dump',
    category: 'MySQL', categoryId: 'mysql', color: 'emerald',
    command: 'mysql -u root -p dbname < backup.sql',
    description:
      'Import a previously exported SQL file into a database. Create the target database first if it doesn\'t exist.',
    slug: 'mysql-import',
  },
  {
    id: 'mysql-show-slow',
    title: 'Find Slow Queries',
    category: 'MySQL', categoryId: 'mysql', color: 'emerald',
    command: 'SHOW FULL PROCESSLIST;\nSHOW STATUS LIKE "Slow_queries";',
    description:
      'Check currently running queries and the count of slow queries. Useful when the app feels sluggish and you suspect N+1 or missing indexes.',
    slug: 'mysql-slow-queries',
  },

  // ── Terminal ──────────────────────────────────────────────
  {
    id: 'terminal-find-port',
    title: 'Find Process Using Port',
    category: 'Terminal', categoryId: 'terminal', color: 'blue',
    command: 'lsof -i :8000\n# Windows: netstat -ano | findstr :8000',
    description:
      'Find which process is occupying a specific port. Useful when "port already in use" errors appear.',
    slug: 'terminal-find-port',
  },
  {
    id: 'terminal-disk-usage',
    title: 'Check Disk Usage',
    category: 'Terminal', categoryId: 'terminal', color: 'blue',
    command: 'du -sh * | sort -rh | head -20',
    description:
      'Show the 20 largest items in the current directory sorted by size. Great for finding what\'s eating your disk space.',
    slug: 'terminal-disk-usage',
  },
];

// Preview subset for Home page (first 6)
export const notesPreview = allNotes.slice(0, 6);
