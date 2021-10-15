import { resolve } from "path";
import i18next, { TFunction, i18n as I18n } from "i18next";
import httpMiddleware from "i18next-http-middleware";
import fsBackend from "i18next-fs-backend";

export type I18nEnhancedRequest = {
  language: string;
  t: TFunction;
  i18n: I18n;
};

export const i18n = i18next
  .createInstance()
  .use(fsBackend)
  .use(httpMiddleware.LanguageDetector);

const initI18n = () => {
  return i18n.init({
    initImmediate: false,
    lng: "fr",
    fallbackLng: "fr",
    ns: ["common"],
    defaultNS: "common",
    fallbackNS: ["common"],
    preload: ["fr"],
    backend: {
      loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
    },
  });
};

// TODO: probably need to wrap inside the middleware
initI18n();

export const i18nMiddleware = httpMiddleware.handle(i18n);