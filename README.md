# Gather Secrets

Generate a JSON value filled with secrets matching a regex.

```yaml
- uses: oss-actions/gather_secrets@v0
  with:
    regex: k8s\.* # select all secrets starting with k8s.
    secrets: ${{ toJSON(secrets) }}
- run: echo $GITHUB_SECRETS_JSON
```
