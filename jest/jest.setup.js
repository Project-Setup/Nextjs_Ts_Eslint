import { join } from 'path';
import { loadEnvConfig } from '@next/env';

// to load '.env' files in test
loadEnvConfig(join(__dirname, '../'));
