import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <section>
      <h1 className="text-red-400">
        {t("UserProfile.title", { firstname: "My name" })}
      </h1>
    </section>
  );
}
