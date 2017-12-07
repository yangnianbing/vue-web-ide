import Vue from 'vue'
import Vuex from 'vuex'
import {Action} from '../comet/Message'
import {send} from '../comet/comet'
import Constants from '../util/Constants'
import functions from '../util/functions'

Vue.use(Vuex)
const $eventBus = new Vue();
export default new Vuex.Store({
  state: {
  // get by store.state.x
  // mapState
    $eventBus: $eventBus,
    currentShowFile: {},
    currentSelectFile: {},
    openFiles: [],
    files: [],
    menuItems: [{
      name: 'File',
      items: [
        {
          name: 'New File',
          commander: 'createFile'
        }, {
          name: 'New Folder',
          commander: 'createFile'
        }, {
          name: 'New Component',
          commander: 'createFile'
        }, {
          name: 'Save As',
          commander: 'createFile'
        }
      ]
    }, {
      name: 'Edit'
    }],
    components: []
  },
  mutations: {
  // call by store.commit('increment', param)
  // or call by store.commit({
  //  type:'increment',
  //  ...
  // })
  // mutations must be synchronous
  // map to component mapMutations
    setCurrentShowFile (state, param) {
      state.currentShowFile = param.currentShowFile
      var areadyOpen = false
      state.openFiles.every(function (file, index) {
        if (file.id === param.currentShowFile.id) {
          state.openFiles[index] = param.currentShowFile
          Vue.set(state.openFiles, state.openFiles)
          areadyOpen = true
          return false
        }
        return true
      })
      !areadyOpen && state.openFiles.push(param.currentShowFile)
    },

    setCurrentSelectFile (state, param) {
      state.currentSelectFile = param.currentSelectFile
    },
    addFiles (state, param) {
      var savefiles = param.files
      savefiles.forEach(file => {
        var path = file.path
        var tree = state.files[path.split(Constants.fileSeperate).shift()]
        functions.mergeTreeNode(tree, file)
      })
    },

    setComponents (state, param) {
      state.components = param.components
    }
  },
  actions: {
  // call action by store.dispatch('increment')
  // like actions but some different
  // commit by mutation
  // it is asynchronous
    incrment (context) {
    // can do some async operations
      context.commit('increment')
    },

  // 增删查改移动文件
    crudmFile (context, param) {
      switch (param.action) {
        case Action.FILE_ADD:
          send(param.content, () => {
            context.commit('setCurrentShowFile', {currentShowFile: param.content})
            context.commit('addFiles', {files: [param.content]})
          })
          break
        case Action.FILE_DELETE:
        case Action.FILE_MODIFY:
        case Action.FILE_RENAME:
        case Action.FILE_MOVE:
          console.log(param.content)
      }
    },

    fetchComponents (context) {
      fetch(Constants.serverHost + '/components/list').then(resp => resp.json()).then(json => {
        context.commit('setComponents', {components: json})
      })
    }
  },
  getters: {
  // get by store.getters.x
  // mapGetters
  }
})

import FileAdd from '../plugin/file-add';
console.log(FileAdd);
console.log(new FileAdd().apply($eventBus));