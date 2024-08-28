import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			react: react.configs.all,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			import: importPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'import/order': [
				'error',
				{
					groups: [
						'builtin', // 組み込みモジュール
						'external', // npmでインストールした外部ライブラリ
						'internal', // 自作モジュール
						['parent', 'sibling'],
						'object',
						'type',
						'index',
					],
					'newlines-between': 'never', // グループ毎にで改行を入れる
					pathGroupsExcludedImportTypes: ['builtin'],
					alphabetize: {
						order: 'asc', // 昇順にソート
						caseInsensitive: true, // 小文字大文字を区別する
					},
					pathGroups: [
						// 指定した順番にソートされる
						{
							pattern: '@/components/common',
							group: 'internal',
							position: 'before',
						},
						{
							pattern: '@/components/hooks',
							group: 'internal',
							position: 'before',
						},
					],
				},
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	}
);
