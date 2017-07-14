import React from 'react'
import Store from './Store'
import { observer } from 'mobx-react'

class WordSpace extends React.Component {
  handleClick (e) {
    e.preventDefault()
    Store.areaVal = this.areaInput.value

    if (Store.areaVal) {
      Store.areaVal
        .split(/[\s]/)
        .map(n => n.replace(/^[^\w\d]+|[^\w\d]+$/gi, ''))
        .map(n => n.toLowerCase())
        .forEach((n, i, arr) => {
          if (n !== '') Store.obj[n] = (Store.obj[n] || 0) + 1
          if (i === arr.length - 1) {
            Store.final = JSON.stringify(Store.obj, null, 2)
          }
        })
    }
    Store.obj = {}
  }

  handleFile (e) {
    let self = this
    let myFile = e.target.files[0]
    if(!myFile.name.endsWith('.txt')){
      alert('You File gotta be a Text File Man !')
      return
    }
    let fileReader = new FileReader()
    fileReader.onload = function (event) {
      Store.areaDefault = `${self.areaInput.value} ${event.target.result}`
    }
    fileReader.readAsText(myFile)
    self.areaInput.form.reset()
  }

  render () {
    return (
      <div>
        <form>
          <textarea
            defaultValue={Store.areaDefault}
            key={Store.areaDefault}
            ref={input => (this.areaInput = input)}
            cols='30'
            rows='10'
          />
          <br /><br />
          <button onClick={this.handleClick.bind(this)}>
            Count Words
          </button><br /><br />
          <input onChange={this.handleFile.bind(this)} type='file' /><br />
          <pre style={{ fontSize: '17px' }}>{Store.final}</pre>
        </form>
      </div>
    )
  }
}

export default observer(WordSpace)
