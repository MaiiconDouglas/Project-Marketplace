
    let people = []

    function clearFields() {
      result.innerHTML = field1.value = field2.value = field3.value =  field4.value = field5.value = field6.value =  field7.value = field8.value = field9.value =  field10.value = field11.value = field12.value =  field13.value =''
      field1.focus()
    }

    function isValid() {
      field1.className = field2.className = field3.className = field4.className = field5.className = field6.className =  field7.className = field8.className = field9.className = field10.className = field11.className = field12.className =  field13.className = ''

      if (!field1.value) {
        result.innerHTML = '<p class="negative">Informe seu nome!</p>'
        field1.className = 'negative'
        field1.focus()
        return false
      }

      if (!field2.value) {
        result.innerHTML = '<p class="negative">Informe seu sobrenome!</p>'
        field2.className = 'negative'
        field2.focus()
        return false
      }

      if (!field3.value) {
        result.innerHTML = '<p class="negative">Informe seu e-mail!</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      if (!field4.value) {
        result.innerHTML = '<p class="negative">Informe seu E-mail!</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      
      if (!field5.value) {
        result.innerHTML = '<p class="negative">Informe sua Senha!</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      if (!field6.value) {
        result.innerHTML = '<p class="negative">Informe sua Senha!</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      if (!field7.value) {
        result.innerHTML = '<p class="negative">Seu número de celular não preenchido!</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      if (!field8.value) {
        result.innerHTML = '<p class="negative">Informe seu RG!</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      if (!field9.value) {
        result.innerHTML = '<p class="negative">Informe seu CPF!<</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      if (!field10.value) {
        result.innerHTML = '<p class="negative">Informe sua Data de Nascimento!</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      
      if (!field11.value) {
        result.innerHTML = '<p class="negative">Informe seu Endereço</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      
      if (!field12.value) {
        result.innerHTML = '<p class="negative">Informe seu Complemento!</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      
      if (!field13.value) {
        result.innerHTML = '<p class="negative">Lagadouro não preenchido</p>'
        field3.className = 'negative'
        field3.focus()
        return false
      }

      return true
    }

    function onSubmit(event) {
      event.preventDefault()

      if (!isValid()) return

      let person = {
        firstName: field1.value,
        lastName: field2.value,
        age: parseInt(field3.value, 10)
      }

      people.push(person)
      clearFields()
    }

    form.addEventListener('submit', onSubmit)

    function onClick(event) {
      event.preventDefault()

      field1.className = field2.className = field3.className = ''

      if (!people.length) {
        result.innerHTML = '<p class="negative">Nenhuma pessoa cadastrada.</p>'
        field.focus()
        return
      }

      let items = ''
      for (let person of people) {
        items += `<li>${person.firstName} ${person.lastName}</li>`
      }

      result.innerHTML = `<ul>${items}</ul>`
    }

    showAll.addEventListener('click', onClick)
