Feature: Login de usuário

  Scenario: Login com senha incorreta
    Given que o cliente está na tela de login
    When preenche o usuario "standard_user" e uma senha "senhaInvalida"
    And clica no botão Entrar
    Then uma mensagem de erro deve ser exibida

  Scenario: Login com senha correta
    Given que o cliente está na tela de login
    When preenche o usuario "standard_user" e uma senha "secret_sauce"
    And clica no botão Entrar
    Then o cliente sera redirecionado para a tela de catalogos

