import PageH1Header from "@/components/PageH1Header";

export default async function GrantsPage() {
  return (
    <main className="space-y-8">
      <PageH1Header>Стипендии и меры поддержки обучающихся</PageH1Header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Информация о предоставлении стипендии обучающимся</h2>
        <p>Нет</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Информация о мерах социальной поддержки обучающихся</h2>
        <p>Выплата дополнительной государственной стипендии, за счёт экономии средств, с учётом успехов в учёбе и активного участия в общественной жизни института по итогам завершения календарного года. Обеспечение трудоустройства гражданина в соответствии с квалификацией, полученной в результате освоения образовательной программы (в случае заключения договора о целевом обучении).</p>
      </section>
    </main>
    )
}