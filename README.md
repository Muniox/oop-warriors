# oop-warriors

OOP_Warriors

Opis

Tworzymy klasę Wojownika
Każdy wojownik posiada zdefiniowane:

- Imię
- Punkty obrażeń
- Ilość życia

Staramy się, żeby nasza klasa miała enkapsulację - dodajemy:

- Do punktów obrażeń getter i setter
- Do życia getter i setter
- Do imienia getter

* Można by sprawdzić, że pola będą prywatne za pomocą #. Nie będziemy tego robili na żywo, ale pokażemy w nagraniu tego projektu.

Wojownik ma metodę levelUp, która zwiększa o 10% życie i punkty obrażeń.

Tworzymy klasę Arena

- Przyjmuje ona dwóch wojowników.
- Wyrzuca błąd, gdy podano błędne dane (instanceof).
- Arena posiada metodę fight(). Dzięki niej pierwszy wojownik zadaje cios drugiemu. Drugi traci tyle życia, ile ataku posiada pierwszy.
- Przy kolejnym wywołaniu tej metody atakować powinien drugi wojownik itd.
- Jeżeli któryś z wojowników będzie miał mniejszy równy 0 życia, to otrzymujemy komunikat, że umarł. Wtedy metoda ta zwróci wojownika wygranego.
- Kiedy nikt nie umiera to metoda ta zwraca null.

Tworzymy dwóch śmiałków i wysyłamy ich na arenę. Robimy taką pętlę, która pozwoli im walczyć do ostatniej kropli krwi. Wtedy podnosimy mu poziom zwycięzcy i wypisujemy zwycięzcę kim jest.

- Co dalej? Śmiało, rozbudowuj program! Teraz możesz zrobić walki między wieloma wojownikami, bo mają swoje poziomy - czego aktualnie nie używają, ale pozwoli im zdobywać wojenne doświadczenie.
