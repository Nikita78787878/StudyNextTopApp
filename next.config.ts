import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  /* config options here */
};
const customWebpack = (config: Configuration): Configuration => {
    // Убедимся, что module и rules существуют
    if (!config.module || !config.module.rules) {
        return config;
    }

    const rules = config.module.rules as RuleSetRule[];

    // Найдем правило для SVG
    const fileLoaderRule = rules.find((rule) => {
        return (
            rule &&
            typeof rule !== "string" &&
            rule.test instanceof RegExp &&
            rule.test.test(".svg")
        );
    }) as RuleSetRule | undefined;

    if (!fileLoaderRule) {
        return config;
    }

    // Удалим старое правило (если нужно) или модифицируем напрямую
    fileLoaderRule.exclude = /\.svg$/i;

    rules.push(
        {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // svg?url
        },
        {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer ?? undefined,
            resourceQuery: { not: [/url/] },
            use: ['@svgr/webpack'],
        }
    );

    return config;
};

module.exports = {
    webpack: customWebpack,
};


export default nextConfig;
