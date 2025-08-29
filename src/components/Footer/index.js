import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.scss";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <p>
        {t("footer.createdWith")} ☕ {t("footer.by")}{" "}
      </p>
    </div>
  );
}

export default Footer;
