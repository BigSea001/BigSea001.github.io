<template>
  <div>
    <u-editor @ready="editorReady" style="width: 800px"></u-editor>
  </div>
</template>

<script>
  import { markdownEditor } from 'vue-simplemde';
  import uEditor from '../common/UEditor.vue';
  export default {
    data: function(){
      return {
        content:'hahahah',
        configs: {
          status: true,
          initialValue: 'Hello BBK',
          renderingConfig: {
            codeSyntaxHighlighting: true,
            highlightingTheme: 'atom-one-light'
          }
        }
      }
    },
    components: {
      markdownEditor,
      uEditor
    },
    methods: {
      editorReady (editorInstance) {
        editorInstance.setContent('Hello world!<br>你可以在这里初始化编辑器的初始内容。');
        editorInstance.addListener('contentChange', () => {
          console.log('编辑器内容发生了变化：', editorInstance.getContent());
        });
      }
    }
  }
</script>
