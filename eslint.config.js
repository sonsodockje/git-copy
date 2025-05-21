import js from '@eslint/js' // ESLint의 기본 추천 규칙 세트
import globals from 'globals' // 전역 변수 (예: browser 환경) 정의용
import pluginReact from 'eslint-plugin-react' // React 특정 규칙용 플러그인
import eslintConfigPrettier from 'eslint-config-prettier/flat' // Prettier와 충돌하는 규칙 비활성화용
import { defineConfig } from 'eslint/config' // ESLint 설정 정의 헬퍼

export default defineConfig([
	// 1. ESLint의 기본 추천 규칙 세트를 적용합니다.
	js.configs.recommended,

	// 2. 파일 타입 정의 및 React 관련 설정, 언어 옵션을 포함하는 주 설정 객체
	{
		files: ['**/*.{js,mjs,cjs,jsx}'], // 이 설정이 적용될 파일들

		languageOptions: {
			// 코드의 전역 환경을 정의합니다. (브라우저 환경의 전역 변수 사용 허용)
			globals: globals.browser,
			// 자바스크립트 버전을 최신으로, JSX 문법 사용을 활성화합니다.
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true, // JSX 문법 활성화
				},
			},
		},

		// React 플러그인을 활성화하고, React 추천 규칙들을 적용합니다.
		plugins: {
			react: pluginReact,
		},
		rules: {
			// React 플러그인의 추천 규칙들을 여기에 스프레드합니다.
			...pluginReact.configs.recommended.rules,
			// 필요에 따라 추가적인 React 규칙이나 일반 규칙을 정의할 수 있습니다.
			// 예시:
			// "react/jsx-uses-react": "off", // React 17+ JSX 변환 시 필요 없음
			// "react/react-in-jsx-scope": "off", // React 17+ JSX 변환 시 필요 없음
			// "indent": ["error", 2], // Prettier를 사용한다면 이 규칙은 Prettier가 처리하도록 둡니다.
		},
		settings: {
			// React 버전을 명시하여 플러그인이 올바르게 작동하도록 돕습니다.
			react: {
				version: 'detect', // 설치된 React 버전을 자동으로 감지합니다.
			},
		},
	},

	// 3. eslint-config-prettier를 가장 마지막에 배치하여 다른 규칙과의 충돌을 비활성화합니다.
	eslintConfigPrettier,
])
